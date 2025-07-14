import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {
            first_name, last_name, email, phone,
            address_1, address_2, city, state, country, date_of_birth,
            spouse_first_name, spouse_last_name, spouse_email, spouse_phone, type, band_id
        } = body;

        const response = await axios.post('https://jkm-backend-main-xbnyr9.laravel.cloud/api/partners', null, {
            params: {
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
            }
        });

        console.log(response.data);

        return NextResponse.json(response.data, { status: response.status });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: 'Submission failed', error: axios.isAxiosError(error) ? error.message : String(error) },
            { status: 500 }
        );
    }
}
