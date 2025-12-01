"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import codes from '@/lib/codes.json';

type CodeMapping = {
  [minute: number]: number;
};

const codeData: CodeMapping = codes;

const getMinuteOfTheDay = () => {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = now.getTime() - startOfDay.getTime();
  return Math.floor(diff / 60000);
};

export default function AuthPage() {
  const [minute, setMinute] = useState(0);
  const [otp, setOtp] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const updateCode = () => {
      const currentMinute = getMinuteOfTheDay();
      setMinute(currentMinute);
      setOtp(codeData[currentMinute] || null);
    };

    updateCode();

    const timer = setInterval(() => {
      const now = new Date();
      const seconds = now.getSeconds();
      const newTimeLeft = 60 - seconds;
      setTimeLeft(newTimeLeft);

      if (seconds === 0) {
        updateCode();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="w-full max-w-sm shadow-lg rounded-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-headline">Your One-Time Password</CardTitle>
        <CardDescription>This code is valid for the current minute.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 text-center">
        <div className="bg-primary/20 rounded-lg p-6">
          <p className="text-5xl font-bold tracking-widest text-primary-foreground">
            {otp !== null ? otp.toString().padStart(4, '0') : '----'}
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Code refreshes in {timeLeft} seconds</p>
          <Progress value={(timeLeft / 60) * 100} className="w-full" />
        </div>
      </CardContent>
    </Card>
  );
}
