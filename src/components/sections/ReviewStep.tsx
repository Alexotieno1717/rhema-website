
import React from 'react';
import { ArrowLeft, User, Users, Send } from 'lucide-react';
import {ContactData, SpouseData} from "@/components/sections/ContactStepper";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

interface ReviewStepProps {
    contactData: ContactData;
    spouseData: SpouseData;
    onPrevious: () => void;
    onSubmit: () => void;
}

const ReviewStep: React.FC<ReviewStepProps> = ({ contactData, spouseData, onPrevious, onSubmit }) => {
    const formatDate = (dateString: string) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Review & Submit</h2>
                <p className="text-gray-600 mb-8">Please review your information before submitting.</p>

                <div className="space-y-6">
                    {/* Contact Information Summary */}
                    <Card className="border-l-4 border-l-blue-500">
                        <CardHeader className="pb-4">
                            <CardTitle className="flex items-center text-lg">
                                <User className="w-5 h-5 mr-2 text-blue-600" />
                                Contact Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <span className="font-medium text-gray-700">Name:</span>
                                    <p className="text-gray-900">{contactData.firstName} {contactData.lastName}</p>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-700">Email:</span>
                                    <p className="text-gray-900">{contactData.email}</p>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-700">Phone:</span>
                                    <p className="text-gray-900">{contactData.phone}</p>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-700">Date of Birth:</span>
                                    <p className="text-gray-900">{formatDate(contactData.dateOfBirth)}</p>
                                </div>
                                <div className="md:col-span-2">
                                    <span className="font-medium text-gray-700">Address:</span>
                                    <p className="text-gray-900">
                                        {contactData.address1}
                                        {contactData.address2 && `, ${contactData.address2}`}
                                        <br />
                                        {contactData.city}, {contactData.state}, {contactData.country}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Spouse Information Summary */}
                    {contactData.includeSpouse && (
                        <Card className="border-l-4 border-l-purple-500">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center text-lg">
                                    <Users className="w-5 h-5 mr-2 text-purple-600" />
                                    Spouse Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <span className="font-medium text-gray-700">Spouse Name:</span>
                                        <p className="text-gray-900">{spouseData.spouseLastName}</p>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-700">Spouse Email:</span>
                                        <p className="text-gray-900">{spouseData.spouseEmail}</p>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-700">Spouse Phone:</span>
                                        <p className="text-gray-900">{spouseData.spousePhone}</p>
                                    </div>
                                    {spouseData.spouseOrganization && (
                                        <div>
                                            <span className="font-medium text-gray-700">Organization:</span>
                                            <p className="text-gray-900">{spouseData.spouseOrganization}</p>
                                        </div>
                                    )}
                                    <div className="md:col-span-2">
                                        <span className="font-medium text-gray-700">Spouse Address:</span>
                                        <p className="text-gray-900">
                                            {spouseData.spouseAddress1}
                                            {spouseData.spouseAddress2 && `, ${spouseData.spouseAddress2}`}
                                            <br />
                                            {spouseData.spouseCity}, {spouseData.spouseState}, {spouseData.spouseCountry}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>

            <div className="flex justify-between pt-6 border-t border-gray-200">
                <Button
                    onClick={onPrevious}
                    variant="outline"
                    className="px-6 py-2 border-gray-300 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                </Button>

                <Button
                    onClick={onSubmit}
                    className="px-8 py-2 bg-green-600 hover:bg-green-700 transition-colors duration-200 cursor-pointer"
                >
                    <Send className="w-4 h-4 mr-2" />
                    Submit Details
                </Button>
            </div>
        </div>
    );
};

export default ReviewStep;
