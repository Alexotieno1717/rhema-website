
import React from 'react';
import {ContactData} from "@/components/sections/ContactStepper";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";

interface ContactInfoStepProps {
    data: ContactData;
    onChange: (data: ContactData) => void;
    onNext: () => void;
}

const ContactInfoStep: React.FC<ContactInfoStepProps> = ({ data, onChange, onNext }) => {
    const handleInputChange = (field: keyof ContactData, value: string | boolean) => {
        onChange({ ...data, [field]: value });
    };

    const isFormValid = () => {
        return (
            data.firstName.trim() !== '' &&
            data.lastName.trim() !== '' &&
            data.email.trim() !== '' &&
            data.address1.trim() !== '' &&
            data.city.trim() !== '' &&
            data.country.trim() !== '' &&
            data.state.trim() !== '' &&
            data.phone.trim() !== '' &&
            data.dateOfBirth.trim() !== ''
        );
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                            id="firstName"
                            value={data.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            placeholder="Enter your first name"
                            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                            id="lastName"
                            value={data.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            placeholder="Enter your last name"
                            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="Enter your email address"
                            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address1">Address 1 *</Label>
                        <Input
                            id="address1"
                            value={data.address1}
                            onChange={(e) => handleInputChange('address1', e.target.value)}
                            placeholder="Enter your street address"
                            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address2">Address 2</Label>
                        <Input
                            id="address2"
                            value={data.address2}
                            onChange={(e) => handleInputChange('address2', e.target.value)}
                            placeholder="Apartment, suite, etc. (optional)"
                            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input
                            id="city"
                            value={data.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            placeholder="Enter your city"
                            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="state">State *</Label>
                        <Input
                            id="state"
                            value={data.state}
                            onChange={(e) => handleInputChange('state', e.target.value)}
                            placeholder="Enter your state"
                            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="country">Country *</Label>
                        <Input
                            id="country"
                            value={data.country}
                            onChange={(e) => handleInputChange('country', e.target.value)}
                            placeholder="Enter your country"
                            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                            id="phone"
                            type="tel"
                            value={data.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="Enter your phone number"
                            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                        <Input
                            id="dateOfBirth"
                            type="date"
                            value={data.dateOfBirth}
                            onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="includeSpouse"
                            checked={data.includeSpouse}
                            onCheckedChange={(checked: boolean) => handleInputChange('includeSpouse', checked as boolean)}
                        />
                        <Label htmlFor="includeSpouse" className="text-sm font-medium text-blue-900">
                            Include Spouse Information
                        </Label>
                    </div>
                    <p className="text-sm text-blue-700 mt-1">
                        Check this box if you need to provide spouse information
                    </p>
                </div>
            </div>

            <div className="flex justify-end pt-6 border-t border-gray-200">
                <Button
                    onClick={onNext}
                    disabled={!isFormValid()}
                    className="px-8 py-2 bg-[#C79D38] hover:bg-[#8D5B00] cursor-pointer transition-colors duration-200 cursor-pointer"
                >
                    Next Step
                </Button>
            </div>
        </div>
    );
};

export default ContactInfoStep;
