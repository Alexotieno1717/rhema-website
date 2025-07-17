"use client"
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Users, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {IPartners, PartnerLevel} from "@/types";
import { useRouter } from 'next/navigation';

type Step = 'welcome' | 'type' | 'level' | 'details';
type PartnerType = 'individual' | 'corporate' | null;

interface PartnersLevelsProps {
    data: IPartners
}

const getLevelColors = (level: PartnerLevel) => {
  switch (level) {
    case 'Bronze':
      return 'bg-gradient-to-br from-[#9a6b3f] to-[#f3e8dc] border-[#9a6b3f]';

    case 'Silver':
      return 'bg-gradient-to-br from-[#bfc1c2] to-[#e0e0e0] border-[#bfc1c2]'; // deeper silver
    case 'Gold':
      return 'bg-gradient-to-br from-[#d4af37] to-[#faf6e7] border-[#d4af37]'; // deeper gold
    case 'Platinum':
      return 'bg-gradient-to-br from-[#e5e4e2] to-[#b0b0b0] border-[#e5e4e2]'; // deeper platinum
    case 'Diamond':
      return 'bg-gradient-to-br from-[#b9f2ff] to-[#5bc6e8] border-[#5bc6e8]'; // deeper diamond
    case 'Faith Builder':
      return 'bg-gradient-to-br from-[#7c8db0] to-[#e0e4f7] border-[#7c8db0]'; // deeper blue-gray
    case 'Hope Carrier':
      return 'bg-gradient-to-br from-[#8db07c] to-[#e4f7e0] border-[#8db07c]'; // deeper green
    case 'Light Barrier':
      return 'bg-gradient-to-br from-[#b0b07c] to-[#f7f7e0] border-[#b0b07c]'; // deeper yellow-green
    case 'Truth Ambassador':
      return 'bg-gradient-to-br from-[#a37cb0] to-[#f0e0f7] border-[#a37cb0]'; // deeper purple
    default:
      return 'bg-white border-gray-200';
  }
};

const PartnerLevels = ({data}: PartnersLevelsProps) => {
    const [currentStep, setCurrentStep] = useState<Step>('welcome');
    const [partnerType, setPartnerType] = useState<PartnerType>(null);
    const [partnerLevel, setPartnerLevel] = useState<PartnerLevel | null>(null);

    const router = useRouter();

    const nextStep = () => {
        if (currentStep === 'welcome') setCurrentStep('type');
        else if (currentStep === 'type') setCurrentStep('level');
        else if (currentStep === 'level') setCurrentStep('details');
    };

    const prevStep = () => {
        if (currentStep === 'details') setCurrentStep('level');
        else if (currentStep === 'level') setCurrentStep('type');
        else if (currentStep === 'type') setCurrentStep('welcome');
    };

    const renderWelcome = () => (
        <div id='levels' className="text-center space-y-8">
            <div className="space-y-4">
                <h1 className="text-center text-[#1B3959] text-5xl font-black uppercase">
                    Join Our Partner Network
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Unlock exclusive opportunities, premium benefits, and grow with our trusted partnership program.
                </p>
            </div>

            <Button
                onClick={nextStep}
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-[#8D5B00] to-[#CBA043] transform hover:scale-105 transition-all duration-200"
            >
                Partner Now
                <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
        </div>
    );

    const renderTypeSelection = () => (
        <div className="space-y-8">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Choose Your Partnership Type</h2>
                <p className="text-gray-600">Select the option that best describes your partnership needs</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <Card
                    className={`cursor-pointer transition-all duration-200 hover:shadow-lg border-2 ${
                        partnerType === 'individual'
                            ? 'border-blue-500 bg-blue-50 shadow-lg'
                            : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => {
                        if (partnerType !== 'individual') {
                            setPartnerType('individual');
                            nextStep();
                        }
                    }}
                >
                    <CardHeader className="text-center pb-4">
                        <User className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                        <CardTitle className="text-2xl">Individual Partner</CardTitle>
                        <CardDescription className="text-base">
                            Perfect for freelancers, consultants, and individual professionals
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-center text-sm text-gray-600">
                            <li> Personal partnership agreement</li>
                            <li> Individual support and resources</li>
                            <li> Flexible terms and conditions</li>
                            <li> Direct communication channels</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card
                    className={`cursor-pointer transition-all duration-200 hover:shadow-lg border-2 ${
                        partnerType === 'corporate'
                            ? 'border-purple-500 bg-purple-50 shadow-lg'
                            : 'border-gray-200 hover:border-purple-300'
                    }`}
                    onClick={() => {
                        if (partnerType !== 'corporate') {
                            setPartnerType('corporate');
                            nextStep();
                        }
                    }}
                >
                    <CardHeader className="text-center pb-4">
                        <Users className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                        <CardTitle className="text-2xl">Corporate Partner</CardTitle>
                        <CardDescription className="text-base">
                            Ideal for companies, agencies, and organizations
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-center text-sm text-gray-600">
                            <li>Enterprise partnership agreement</li>
                            <li>Team-based support and training</li>
                            <li>Volume-based benefits</li>
                            <li>Dedicated account management</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>

            <div className="flex justify-between">
                <Button variant="outline" onClick={prevStep} className="cursor-pointer">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                </Button>
                <Button
                    onClick={nextStep}
                    disabled={!partnerType}
                    className="bg-gradient-to-r from-[#8D5B00] to-[#CBA043] cursor-pointer"
                >
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </div>
    );

    const renderLevelSelection = () => {
        const levelsData = partnerType === 'individual' ? data.levels.data.individual : data.levels.data.corporate;
    
        return (
            <div className="space-y-8">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900">Select Your Partner Level</h2>
                    <p className="text-gray-600">
                        Choose the partnership tier that matches your goals
                    </p>
                </div>
    
                <div className=''>
                    {/* Render levels based on partner type */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {levelsData.map((item, i) => (
                            <Card
                                className={`cursor-pointer transition-all duration-300 border-2 flex flex-col shadow-xl py-10 px-8 items-center text-center space-y-4 relative overflow-hidden ${
                                    partnerLevel === item.slug
                                        ? 'border-gray-500 bg-gray-50 shadow-2xl scale-105'
                                        : getLevelColors(item.slug as PartnerLevel)
                                } hover:scale-105 hover:shadow-2xl hover:z-10`} // floating and animated
                                style={{
                                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15), 0 1.5px 4px 0 rgba(0,0,0,0.10)',
                                    background: undefined,
                                }}
                                onClick={() => {
                                    if (partnerLevel !== item.slug) {
                                        setPartnerLevel(item.slug as PartnerLevel);
                                        nextStep();
                                    }
                                }}
                                key={i}
                            >
                                {/* Glossy overlay */}
                                <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{background: 'linear-gradient(120deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.10) 60%, rgba(255,255,255,0.05) 100%)', borderRadius: 'inherit'}}></div>
                                <h1 className="font-extrabold text-xl md:text-2xl text-[#1B3959] mb-2 drop-shadow-sm tracking-wide">
                                    {item.slug}
                                    {/* {item.amount && (
                                        <span className="ml-2 font-bold text-lg text-[#b08d57]">{item.amount}</span>
                                    )} */}
                                </h1>
                                {
                                    Array.isArray(item.description) ? (
                                        <ul className="flex flex-col items-center gap-2 mt-2 mb-2">
                                            {item.description.map((desc: string, idx: number) => (
                                                <li key={idx} className="flex items-start w-full max-w-xs text-left text-md text-[#475467] relative pl-6">
                                                    <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#b08d57] mt-0.5"></span>
                                                    {desc}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className='text-center text-md text-[#475467]'>{item.description}</p>
                                    )
                                }
                                {/* Add other content dynamically if needed */}
                            </Card>
                        ))}
                    </div>
                </div>
    
                <div className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                    </Button>
                    <Button
                        onClick={nextStep}
                        disabled={!partnerLevel}
                        className="bg-gradient-to-r from-[#8D5B00] to-[#CBA043] cursor-pointer"
                    >
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        );
    };
    

    const renderDetails = () => (
        <div className="space-y-8">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Partnership Summary</h2>
                <p className="text-gray-600">Review your selections and complete your partnership application</p>
            </div>

            <div className="flex justify-center">
                <Card className="border-2 border-green-200 bg-green-50 max-w-sm w-full mx-auto">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-2xl text-green-800">Application Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div>
                            <h4 className="font-semibold text-green-800">Partnership Type:</h4>
                            <p className="text-green-700 capitalize">{partnerType}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-green-800">Partner Level:</h4>
                            <p className="text-green-700 capitalize">{partnerLevel}</p>
                        </div>
                        <div className="border-t border-green-200 pt-4 mt-2">
                            <h4 className="font-semibold text-green-800 mb-2">Next Steps:</h4>
                            <ul className="space-y-1 text-sm text-green-700">
                                <li>• Complete your partner application form</li>
                                <li>• Submit required documentation</li>
                                <li>• Receive partnership agreement</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                </Button>
                <Button
                    className="bg-gradient-to-r from-[#8D5B00] to-[#CBA043] cursor-pointer"
                    onClick={() => {
                        router.push(`/member?type=${partnerType}&level=${partnerLevel}`)
                    }}
                >
                    Complete Application
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </div>
    );

    return (
        <div className="py-20">
            <div className="px-[82px] ">
                {/* Progress indicator */}
                <div className="mb-12 max-w-2xl mx-auto">
                    <div className="flex items-center justify-between">
                        {['Welcome', 'Type', 'Level', 'Details'].map((step, index) => (
                            <div key={step} className="flex items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                                    index <= ['welcome', 'type', 'level', 'details'].indexOf(currentStep)
                                        ? 'bg-[#C79D38] text-white'
                                        : 'bg-gray-200 text-gray-600'
                                }`}>
                                    {index + 1}
                                </div>
                                <span className={`ml-2 text-sm font-medium ${
                                    index <= ['welcome', 'type', 'level', 'details'].indexOf(currentStep)
                                        ? 'text-gray-800'
                                        : 'text-gray-400'
                                }`}>
                                  {step}
                                </span>
                                {index < 3 && (
                                    <div className={`w-12 h-0.5 mx-4 ${
                                        index < ['welcome', 'type', 'level', 'details'].indexOf(currentStep)
                                            ? 'bg-[#C79D38]'
                                            : 'bg-gray-200'
                                    }`} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Step content */}
                {currentStep === 'welcome' && renderWelcome()}
                {currentStep === 'type' && renderTypeSelection()}
                {currentStep === 'level' && renderLevelSelection()}
                {currentStep === 'details' && renderDetails()}
            </div>
        </div>
    );
};

export default PartnerLevels;
