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

const getBandIdFromSlug = (slug: string | null): number | null => {
    switch (slug) {
        case 'gold':
            return 1;
        case 'silver':
            return 2;
        case 'platinum':
            return 3;
        default:
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
        setPartnerType(type);
        setPartnerLevel(level);
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
            const response = await fetch('/api/partners', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
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

                    type: partnerType, // 👈 NEW: Add partnership type
                    band_id: getBandIdFromSlug(partnerLevel), // 👈 NEW: Add band_id from level
                }),
            });

            if (!response.ok) throw new Error('Something went wrong');

            const data = await response.json();
            console.log('Submission response:', data);
            toast.success("Partner has been created successfully.")
            router.push('/partner');
        } catch (error) {
            console.error('Submission error:', error);
            toast.error("Failed to submit form. Please try again.")
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
