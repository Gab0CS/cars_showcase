"use client"
import { ShowMoreProps } from '@/types/types';
import { useRouter } from 'next/navigation';

import React from 'react'
import { CustomButton } from '.';
import { updateSearchParams } from '@/utils';

const ShowMore = ({ pageNumber, 
isNext }: ShowMoreProps) => {
    
    const router = useRouter();
    const handleNavigation = () => {

        const newLimit = (pageNumber + 1) * 10;
        const newPathname = updateSearchParams("limit", String(newLimit))

        router.push(newPathname);
    }
    return (
        
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton 
                    title='Show More'
                    btnType='button'
                    containerStyles='bg-primary-blue rounded-full text-white'
                    handleClick={handleNavigation}
                />
            )}
        </div>
    )
}

export default ShowMore