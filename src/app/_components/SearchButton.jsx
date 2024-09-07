'use client'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import React from 'react'

function SearchButton() {
    const getValues = () => {
        console.log('it works')
    }
    return (
        <Button onClick={getValues}><Search /></Button>
    )
}

export default SearchButton