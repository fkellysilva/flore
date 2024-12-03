"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function SignUpForm() {
  const t = useTranslations("Signup");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    birthday: "",
    genre: "",
    termsAccepted: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="flex justify-center items-center py-[6rem] bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            {t("title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">{t("full_name")}</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder={t("placeholder_full_name")}
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t("email")}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("placeholder_email")}
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">{t("password")}</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="birthday">{t("birthday")}</Label>
                <Input
                  id="birthday"
                  name="birthday"
                  type="date"
                  required
                  value={formData.birthday}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label>{t("genre")}</Label>
                <RadioGroup
                  name="genre"
                  value={formData.genre}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, genre: value }))
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">{t("male")}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">{t("female")}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="prefer-not-to-tell"
                      id="prefer-not-to-tell"
                    />
                    <Label htmlFor="prefer-not-to-tell">{t("other")}</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({
                      ...prev,
                      termsAccepted: checked as boolean,
                    }))
                  }
                />
                <Label htmlFor="terms" className="text-sm">
                  {t("terms_1")}{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    {t("terms_2")}
                  </Link>
                </Label>
              </div>
              <Button type="submit" className="w-full">
                {t("signup")}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-center w-full">
            {t("already_signed_up")}{" "}
            <Link href="/sign-in" className="text-primary hover:underline">
              {t("login")}
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
