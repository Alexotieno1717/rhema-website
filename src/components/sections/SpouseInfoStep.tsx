
import React from 'react';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import {SpouseData} from "@/components/sections/ContactStepper";

interface SpouseInfoStepProps {
    data: SpouseData;
    onChange: (data: SpouseData) => void;
    onNext: () => void;
    onPrevious: () => void;
}

const SpouseInfoStep: React.FC<SpouseInfoStepProps> = ({ data, onChange, onNext, onPrevious }) => {
    const handleInputChange = (field: keyof SpouseData, value: string) => {
        onChange({ ...data, [field]: value });
    };

    const isFormValid = () => {
        return (
            data.spouseLastName.trim() !== '' &&
            data.spouseEmail.trim() !== '' &&
            data.spouseAddress1.trim() !== '' &&
            data.spouseCity.trim() !== '' &&
            data.spouseCountry.trim() !== '' &&
            data.spouseState.trim() !== '' &&
            data.spousePhone.trim() !== ''
        );
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Spouse Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="spouseLastName">Spouse Last Name *</Label>
                        <Input
                            id="spouseLastName"
                            value={data.spouseLastName}
                            onChange={(e) => handleInputChange('spouseLastName', e.target.value)}
                            placeholder="Enter spouse's last name"
                            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="spouseEmail">Spouse Email *</Label>
                        <Input
                            id="spouseEmail"
                            type="email"
                            value={data.spouseEmail}
                            onChange={(e) => handleInputChange('spouseEmail', e.target.value)}
                            placeholder="Enter spouse's email address"
                            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="spouseAddress1">Spouse Address 1 *</Label>
                        <Input
                            id="spouseAddress1"
                            value={data.spouseAddress1}
                            onChange={(e) => handleInputChange('spouseAddress1', e.target.value)}
                            placeholder="Enter spouse's street address"
                            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="spouseAddress2">Spouse Address 2</Label>
                        <Input
                            id="spouseAddress2"
                            value={data.spouseAddress2}
                            onChange={(e) => handleInputChange('spouseAddress2', e.target.value)}
                            placeholder="Apartment, suite, etc. (optional)"
                            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="spouseCity">Spouse City *</Label>
                        <Input
                            id="spouseCity"
                            value={data.spouseCity}
                            onChange={(e) => handleInputChange('spouseCity', e.target.value)}
                            placeholder="Enter spouse's city"
                            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="spouseState">Spouse State *</Label>
                        <Input
                            id="spouseState"
                            value={data.spouseState}
                            onChange={(e) => handleInputChange('spouseState', e.target.value)}
                            placeholder="Enter spouse's state"
                            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="spouseCountry">Spouse Country *</Label>
                        <Input
                            id="spouseCountry"
                            value={data.spouseCountry}
                            onChange={(e) => handleInputChange('spouseCountry', e.target.value)}
                            placeholder="Enter spouse's country"
                            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="spousePhone">Spouse Phone *</Label>
                        <Input
                            id="spousePhone"
                            type="tel"
                            value={data.spousePhone}
                            onChange={(e) => handleInputChange('spousePhone', e.target.value)}
                            placeholder="Enter spouse's phone number"
                            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="spouseOrganization">Spouse Organization</Label>
                        <Input
                            id="spouseOrganization"
                            value={data.spouseOrganization}
                            onChange={(e) => handleInputChange('spouseOrganization', e.target.value)}
                            placeholder="Enter spouse's organization (optional)"
                            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
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

export default SpouseInfoStep;
