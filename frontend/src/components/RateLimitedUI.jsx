import { ZapIcon } from 'lucide-react'
import React from 'react'

const RateLimitedUI = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 py-8">
        <div className="bg-primary/10 border border-primary/30 rounded-lg shadow-md">
        <div className="flex flex-col items-center justify-center p-6">
            <div className="flex-shrink-0 bg-primary/20 rounded-full mb-0 md;mr-6">
            <ZapIcon className="size-10 text-primary" />
            </div> 
            <div className='text-center md:text-left'>
                <h2 className="text-xl font-bold text-primary">Rate Limited</h2>
                <p className="text-muted-foreground">
                    You have reached the rate limit for creating new notes. Please try again later.
                </p>
                <p className="text-sm text-base-content/70">
                Try again in a few seconds or wait for the rate limit to reset. We apologize for the inconvenience and appreciate your patience.
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default RateLimitedUI