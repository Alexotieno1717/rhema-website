import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log('📤 API Route received submission:', body);

        const {
            first_name, last_name, email, phone,
            address_1, address_2, city, state, country, date_of_birth,
            spouse_first_name, spouse_last_name, spouse_email, spouse_phone, type, band_id
        } = body;

        // Use the same backend URL as the bands API for consistency
        const backendUrl = 'http://jkm-backend.test/api/partners';
        console.log('🌐 Sending request to:', backendUrl);

        const requestParams = {
            first_name,
            last_name,
            email,
            phone,
            address_1,
            address_2,
            city,
            state,
            country,
            date_of_birth,
            type,
            band_id,
            spouse_first_name,
            spouse_last_name,
            spouse_email,
            spouse_phone,
        };

        console.log('📋 Request parameters:', requestParams);

        const response = await axios.post(backendUrl, null, {
            params: requestParams,
            timeout: 10000, // 10 second timeout
        });

        console.log('✅ Backend response received:', {
            status: response.status,
            statusText: response.statusText,
            data: response.data
        });

        return NextResponse.json(response.data, { status: response.status });

    } catch (error: unknown) {
        console.error('💥 API Route error:', error);
        
        let errorMessage = 'Submission failed';
        let errorDetails = '';

        if (axios.isAxiosError(error)) {
            console.error('🌐 Axios error details:', {
                message: error.message,
                code: error.code,
                status: error.response?.status,
                statusText: error.response?.statusText,
                data: error.response?.data
            });

            const responseData = error.response?.data as Record<string, unknown>;
            errorMessage = String(responseData?.message) || 
                          String(responseData?.error) || 
                          error.message || 
                          'Network request failed';
            
            errorDetails = JSON.stringify(responseData) || error.message;
        } else {
            errorMessage = (error as Error)?.message || 'Unknown error occurred';
            errorDetails = String(error);
        }

        console.error('❌ Final error response:', { errorMessage, errorDetails });

        return NextResponse.json(
            { 
                message: errorMessage, 
                error: errorDetails,
                debug: {
                    timestamp: new Date().toISOString(),
                    errorType: error instanceof Error ? error.constructor.name : 'Unknown'
                }
            },
            { status: axios.isAxiosError(error) ? error.response?.status || 500 : 500 }
        );
    }
}
