// hooks/usePostRequest.ts

import axios from 'axios';

interface PostRequestProps {
    url: string;
    data: Record<string, unknown>;
    token: string;
}

const usePostRequest = async ({ url, data, token }: PostRequestProps) => {
    try {
        const response = await axios.post(url, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export default usePostRequest;
