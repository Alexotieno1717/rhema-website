"use client"
import React, {useEffect, useState} from 'react';
import { Check, User, Users, FileCheck } from 'lucide-react';
import ContactInfoStep from "@/components/sections/ContactInfoStep";
import SpouseInfoStep from "@/components/sections/SpouseInfoStep";
import ReviewStep from "@/components/sections/ReviewStep";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {useRouter, useSearchParams} from 'next/navigation';
import { toast } from "sonner"

export interface ContactData {
    firstName: string;
    lastName: string;
    email: string;
    address1: string;
    address2: string;
    city: string;
    country: string;
    state: string;
    phone: string;
    dateOfBirth: string;
    includeSpouse: boolean;
}

export interface SpouseData {
    spouseLastName: string;
    spouseEmail: string;
    spouseAddress1: string;
    spouseAddress2: string;
    spouseCity: string;
    spouseCountry: string;
    spouseState: string;
    spouseOrganization: string;
    spousePhone: string;
}

const baseUrl = 'https://jkm-backend-main-xbnyr9.laravel.cloud';
// const baseUrl = 'http://jkm-backend.test';


const getAllBands = async () => {
    try {
        console.log('🔍 Fetching bands from API...');
        
        // Try HTTPS first, fallback to HTTP if SSL fails
        let url = `${baseUrl}/api/bands`;
        let response;
        
        try {
            response = await fetch(url);
        } catch (sslError) {
            console.warn('⚠️ HTTPS failed (SSL certificate issue), trying HTTP...', sslError);
            url = url.replace('https://', 'http://');
            response = await fetch(url);
        }
        
        console.log('📡 Response received from:', url, {
            status: response.status,
            statusText: response.statusText,
            ok: response.ok,
            headers: Object.fromEntries(response.headers.entries())
        });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('✅ Bands data parsed successfully:', data);
        return data;
    } catch (error) {
        console.error('❌ Error in getAllBands:', error);
        throw error;
    }
}

const getBandIdFromSlug = async (slug: string | null): Promise<number | null> => {
    console.log('🎯 Resolving band_id for slug:', slug);
    
    if (!slug) {
        console.warn('⚠️ No slug provided to getBandIdFromSlug');
        return null;
    }
    
    try {
        // First try to get from API
        const bandsResponse = await getAllBands();
        
        if (bandsResponse && bandsResponse.status && bandsResponse.result && Array.isArray(bandsResponse.result)) {
            console.log('🔍 Searching for band in API response. Available bands:', 
                bandsResponse.result.map((band: { name: string; id: number }) => `${band.name} (ID: ${band.id})`));
            
            // Find matching band (case-insensitive)
            const matchingBand = bandsResponse.result.find((band: { name: string; id: number }) => 
                band.name.toLowerCase() === slug.toLowerCase()
            );
            
            if (matchingBand) {
                console.log('✅ Found matching band:', matchingBand);
                return matchingBand.id;
            } else {
                console.warn(`⚠️ No exact match found for "${slug}". Available options:`, 
                    bandsResponse.result.map((band: { name: string }) => band.name));
            }
        } else {
            console.error('❌ Invalid API response structure:', bandsResponse);
        }
    } catch (error) {
        console.error('❌ Error fetching bands from API, falling back to hardcoded mapping:', error);
    }
    
    // Fallback to hardcoded mapping
    const fallbackMapping: { [key: string]: number } = {
        
        'bronze': 1,
        'silver': 2, 
        'gold': 3,
        'platinum': 4,
        'diamond': 5,
        'faith builder': 1,
        'hope carrier': 2,
        'light bearer': 3,
        'truth ambassador': 4,
    };
    
    const normalizedSlug = slug.toLowerCase();
    const fallbackId = fallbackMapping[normalizedSlug];
    
    if (fallbackId) {
        console.log(`🔄 Using fallback mapping: "${slug}" → ID: ${fallbackId}`);
        return fallbackId;
    } else {
        console.error(`❌ No mapping found for "${slug}". Available fallback mappings:`, Object.keys(fallbackMapping));
        return null;
    }
};

const ContactStepper = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [contactData, setContactData] = useState<ContactData>({
        firstName: '',
        lastName: '',
        email: '',
        address1: '',
        address2: '',
        city: '',
        country: '',
        state: '',
        phone: '',
        dateOfBirth: '',
        includeSpouse: false,
    });

    const [spouseData, setSpouseData] = useState<SpouseData>({
        spouseLastName: '',
        spouseEmail: '',
        spouseAddress1: '',
        spouseAddress2: '',
        spouseCity: '',
        spouseCountry: '',
        spouseState: '',
        spouseOrganization: '',
        spousePhone: '',
    });

    const router = useRouter();

    const searchParams = useSearchParams();
    const [partnerType, setPartnerType] = useState<string | null>(null);
    const [partnerLevel, setPartnerLevel] = useState<string | null>(null);

    useEffect(() => {
        const type = searchParams.get('type');
        const level = searchParams.get('level');
        
        console.log('🔍 URL Parameters detected:', {
            type,
            level,
            allParams: Object.fromEntries(searchParams.entries())
        });
        
        setPartnerType(type);
        setPartnerLevel(level);
        
        console.log('📝 State updated:', {
            partnerType: type,
            partnerLevel: level
        });
    }, [searchParams]);

    const steps = [
        { number: 1, title: 'Contact Information', icon: User },
        { number: 2, title: 'Spouse Information', icon: Users, conditional: true },
        { number: 3, title: 'Review & Submit', icon: FileCheck },
    ];

    const getVisibleSteps = () => {
        if (contactData.includeSpouse) {
            return steps;
        }
        return steps.filter(step => !step.conditional);
    };

    const getProgress = () => {
        const visibleSteps = getVisibleSteps();
        return (currentStep / visibleSteps.length) * 100;
    };

    const handleNext = () => {
        const visibleSteps = getVisibleSteps();
        if (currentStep < visibleSteps.length) {
            if (currentStep === 1 && !contactData.includeSpouse) {
                setCurrentStep(3); // Skip spouse step
            } else {
                setCurrentStep(currentStep + 1);
            }
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            if (currentStep === 3 && !contactData.includeSpouse) {
                setCurrentStep(1); // Skip spouse step when going back
            } else {
                setCurrentStep(currentStep - 1);
            }
        }
    };

    const handleSubmit = async () => {
        console.log('Submitting partnerType and partnerLevel:', partnerType, partnerLevel);

        try {
            console.log('🚀 Starting partner submission process...');
            console.log('📋 Form data:', {
                partnerType,
                partnerLevel,
                contactData,
                spouseData: contactData.includeSpouse ? spouseData : 'Not included'
            });

            // Get the band_id first
            console.log('🎯 Resolving band_id...');
            const bandId = await getBandIdFromSlug(partnerLevel);
            console.log('🆔 Resolved band_id:', bandId);

            if (bandId === null) {
                const errorMsg = `Could not resolve band_id for partnership level: "${partnerLevel}"`;
                console.error('❌', errorMsg);
                toast.error(errorMsg);
                return;
            }

            const submissionPayload = {
                first_name: contactData.firstName,
                last_name: contactData.lastName,
                email: contactData.email,
                phone: contactData.phone,
                address_1: contactData.address1,
                address_2: contactData.address2,
                city: contactData.city,
                state: contactData.state,
                country: contactData.country,
                date_of_birth: contactData.dateOfBirth,
                spouse_first_name: contactData.includeSpouse ? contactData.firstName : '',
                spouse_last_name: contactData.includeSpouse ? spouseData.spouseLastName : '',
                spouse_email: contactData.includeSpouse ? spouseData.spouseEmail : '',
                spouse_phone: contactData.includeSpouse ? spouseData.spousePhone : '',
                type: partnerType,
                band_id: bandId,
            };

            console.log('📤 Submitting payload:', submissionPayload);

            const response = await fetch(`${baseUrl}/api/partners`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionPayload),
            });

            console.log('📡 Partner API response:', {
                status: response.status,
                statusText: response.statusText,
                ok: response.ok,
                headers: Object.fromEntries(response.headers.entries())
            });

            if (!response.ok) {
                // Try to get detailed error from response
                let errorDetails;
                try {
                    errorDetails = await response.json();
                    console.error('❌ Server error details:', errorDetails);
                } catch (parseError) {
                    console.error('❌ Could not parse error response:', parseError);
                    errorDetails = { message: `HTTP ${response.status}: ${response.statusText}` };
                }
                
                const errorMessage = errorDetails?.message || 
                                   errorDetails?.error || 
                                   errorDetails?.status_message ||
                                   `Server error: ${response.status} ${response.statusText}`;
                
                throw new Error(errorMessage);
            }

            const data = await response.json();
            console.log('✅ Submission successful:', data);
            toast.success(data.status_message || 'Partner created successfully!');
            router.push('/partner');

        } catch (error: unknown) {
            console.error('💥 Submission failed:', error);
            
            // Detailed error analysis with proper type guards
            let errorMessage = 'An unexpected error occurred during submission.';
            let debugInfo = '';

            if (error instanceof TypeError && error.message.includes('fetch')) {
                errorMessage = 'Network error: Could not connect to the server.';
                debugInfo = 'Check your internet connection and server status.';
            } else if (error instanceof Error) {
                errorMessage = error.message;
                debugInfo = `Error type: ${error.constructor.name}`;
            } else if (typeof error === 'string') {
                errorMessage = error;
            } else if (error && typeof error === 'object' && 'message' in error) {
                errorMessage = String((error as { message: unknown }).message);
            }

            // Log comprehensive debug information
            console.group('🔍 Error Debug Information');
            console.error('Error message:', errorMessage);
            console.error('Debug info:', debugInfo);
            console.error('Error object:', error);
            if (error instanceof Error) {
                console.error('Error stack:', error.stack);
            }
            console.error('Partner type:', partnerType);
            console.error('Partner level:', partnerLevel);
            console.groupEnd();

            // Show user-friendly error with debug details in console
            toast.error(errorMessage, {
                duration: 5000,
            });
        }
    };


    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <ContactInfoStep
                        data={contactData}
                        onChange={setContactData}
                        onNext={handleNext}
                    />
                );
            case 2:
                return (
                    <SpouseInfoStep
                        data={spouseData}
                        onChange={setSpouseData}
                        onNext={handleNext}
                        onPrevious={handlePrevious}
                    />
                );
            case 3:
                return (
                    <ReviewStep
                        contactData={contactData}
                        spouseData={spouseData}
                        onPrevious={handlePrevious}
                        onSubmit={handleSubmit}
                    />
                );
            default:
                return null;
        }
    };

    const visibleSteps = getVisibleSteps();

    return (
        <div className="w-full max-w-3xl mx-auto border border-gray-200 rounded-lg">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-6">
                    <div className="mb-6">
                        <Progress value={getProgress()} className="h-2" />
                    </div>

                    <div className="flex justify-between items-center">
                        {visibleSteps.map((step) => {
                            const Icon = step.icon;
                            const isActive = step.number === currentStep;
                            const isCompleted = step.number < currentStep;
                            // const stepNumber = contactData.includeSpouse ? step.number : (step.number === 3 ? 2 : step.number);

                            return (
                                <div key={step.number} className="flex flex-col items-center">
                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                                            isCompleted
                                                ? 'bg-green-500 text-white'
                                                : isActive
                                                    ? 'bg-[#C79D38] text-white'
                                                    : 'bg-gray-200 text-gray-500'
                                        }`}
                                    >
                                        {isCompleted ? (
                                            <Check className="w-6 h-6" />
                                        ) : (
                                            <Icon className="w-6 h-6" />
                                        )}
                                    </div>
                                    <span
                                        className={`mt-2 text-sm font-medium transition-colors duration-300 ${
                                            isActive ? 'text-[#C79D38]' : isCompleted ? 'text-green-600' : 'text-gray-500'
                                        }`}
                                    >
                                       {step.title}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </CardHeader>

                <CardContent className="pt-0">
                    <div className="animate-fade-in">
                        {renderStep()}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ContactStepper;
