import { CurrencyComboBox } from '@/components/CurrencyComboBox'
import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { currentUser } from '@clerk/nextjs/server'
import { Hand } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

async function page() {
  
    const user = await currentUser()
    if(!user) {
        redirect : "/sign-in"
    }
    return (
    <div className='container flex max-w-2xl flex-col items-center justify-between gap-4'>
        <div>
            <h1 className="text-center text-3xl flex">
                Welcome , <span className='ml-2 font-bold'>{user?.firstName}!  </span> 
                <span className='pl-2 items-center'><Hand size={40} color='orange'/></span>
            </h1>
            <h2 className="mt-4 text-base text-muted-foreground text-center">
                Let &apos;s get started by setting up your currency.
            </h2>
            <h3 className="mt-4 text-sm text-muted-foreground text-center">
                You can change these settings at any time.
            </h3>
        </div>
        <Separator />
        <Card className='w-full'>
            <CardHeader>
                <CardTitle className='text-2xl'>Currency</CardTitle>
                <CardDescription>Set your default currency for transctions.</CardDescription>
            </CardHeader>
            <CardContent>
                <CurrencyComboBox />
            </CardContent>
        </Card>
        <Separator />
        <Button className='w-full font-bold bg-amber-50' asChild>
            <Link href={'/'}>I &apos;m done! Take me to dashboard</Link>
        </Button>
        <div>
            <Logo />
        </div>
    </div>
  )
}

export default page