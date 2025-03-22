"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { logOutAction } from "@/actions/users";

export const LogOutButton = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogOut = async () => {
    setLoading(true);

    const { errorMessage } = await logOutAction();
    console.log(errorMessage);
    
    if (!errorMessage) {
      toast.success("Logged Out", {
        description: "You have been successfully logged out",
      });
      router.push("/");
    } else {
      toast("Error", {
        description: errorMessage,
      });
    }
    setLoading(false);
  };
  return (
    <Button
      className="w-24"
      variant={"outline"}
      onClick={handleLogOut}
      disabled={loading}
    >
      {loading ? <Loader2 className="animate-spin" /> : "Log Out"}
    </Button>
  );
};
