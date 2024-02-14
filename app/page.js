"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { user } = useUser();
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    } else {
      router.push("/courses");
    }
  }, [user]);

  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
