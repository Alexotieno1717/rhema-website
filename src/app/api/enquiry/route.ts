import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {
            first_name,
            last_name,
            email,
            phone_number,
            message,
            privacy_policy_agreed,
        } = body;

        const response = await axios.post(
            'https://jkm-backend-main-xbnyr9.laravel.cloud/api/enquiries',
            {
                first_name,
                last_name,
                email,
                phone_number,
                message,
                privacy_policy_agreed,
            }
        );

        return NextResponse.json(response.data, { status: response.status });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: 'Submission failed', error: axios.isAxiosError(error) ? error.message : String(error) },
            { status: 500 }
        );
    }
}
