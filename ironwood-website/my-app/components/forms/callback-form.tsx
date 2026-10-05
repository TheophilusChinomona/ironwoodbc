"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import {
  callbackFormSchema,
  type CallbackFormData,
  serviceOptions,
  clientTypeOptions,
  bestTimeOptions,
  popiaConsentText
} from "@/lib/validations/callback-form";

export function CallbackForm({ defaultService }: { defaultService?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const parsedService = callbackFormSchema.shape.service.safeParse(defaultService);

  useEffect(() => {
    if (isSuccess || hasSubmitError) {
      feedbackRef.current?.focus({ preventScroll: true });
      feedbackRef.current?.scrollIntoView({ block: "center", behavior: "instant" });
    }
  }, [isSuccess, hasSubmitError]);

  const form = useForm<CallbackFormData>({
    resolver: zodResolver(callbackFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      clientType: undefined,
      service: parsedService.success ? parsedService.data : undefined,
      bestTime: undefined,
      message: "",
      consent: false,
      website: "" // Honeypot field
    }
  });

  async function onSubmit(data: CallbackFormData) {
    // Honeypot check - if website field is filled, it's likely spam
    if (data.website) {
      return;
    }

    setIsSubmitting(true);
    setHasSubmitError(false);

    try {
      const response = await fetch("/api/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error("Callback request failed");
      }
      const result = await response.json();
      if (result?.success !== true) {
        throw new Error("Callback request was not confirmed");
      }

      setIsSuccess(true);
      form.reset();
    } catch {
      setHasSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div
        ref={feedbackRef}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        tabIndex={-1}
        className="bg-brand-50 border border-brand-200 rounded-lg p-8 text-center scroll-mt-24 focus-visible:outline-2 focus-visible:outline-brand-700"
      >
        <CheckCircle className="h-12 w-12 text-brand-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-brand-900 mb-2">
          Thank You!
        </h3>
        <p className="text-brand-700 mb-4">
          Your callback request has been submitted successfully.
        </p>
        <p className="text-sm text-brand-600">
          We&apos;ll call you back during your preferred time slot.
        </p>
        <Button
          onClick={() => setIsSuccess(false)}
          variant="outline"
          className="mt-6 border-brand-300 text-brand-700 hover:bg-brand-100"
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="min-w-0 space-y-6" aria-busy={isSubmitting}>
        {/* Honeypot field - hidden from users */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            tabIndex={-1}
            {...form.register("website")}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Full Name */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="min-w-0">
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input autoComplete="name" placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="min-w-0">
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input type="tel" inputMode="tel" autoComplete="tel" placeholder="0821234567 or +27821234567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="min-w-0">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" autoComplete="email" placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Client Type */}
          <FormField
            control={form.control}
            name="clientType"
            render={({ field }) => (
              <FormItem className="min-w-0">
                <FormLabel>I am a/an *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value ?? ""}>
                  <FormControl>
                    <SelectTrigger className="w-full min-w-0 [&_[data-slot=select-value]]:min-w-0 [&_[data-slot=select-value]]:block [&_[data-slot=select-value]]:truncate">
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {clientTypeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Service */}
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem className="min-w-0">
                <FormLabel>Service Needed *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value ?? ""}>
                  <FormControl>
                    <SelectTrigger className="w-full min-w-0 [&_[data-slot=select-value]]:min-w-0 [&_[data-slot=select-value]]:block [&_[data-slot=select-value]]:truncate">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {serviceOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Best Time */}
          <FormField
            control={form.control}
            name="bestTime"
            render={({ field }) => (
              <FormItem className="min-w-0">
                <FormLabel>Best Time to Call *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value ?? ""}>
                  <FormControl>
                    <SelectTrigger className="w-full min-w-0 [&_[data-slot=select-value]]:min-w-0 [&_[data-slot=select-value]]:block [&_[data-slot=select-value]]:truncate">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {bestTimeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="min-w-0">
              <FormLabel>Message (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us briefly about your needs..."
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Consent */}
        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-slate-200 p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm font-normal cursor-pointer">
                  {popiaConsentText}
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        {hasSubmitError && (
          <div
            ref={feedbackRef}
            role="alert"
            tabIndex={-1}
            className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800 scroll-mt-24 focus-visible:outline-2 focus-visible:outline-red-700"
          >
            We could not send your request. Your details are still here. Please try again.
          </div>
        )}

        <Button
          type="submit"
          className="w-full bg-brand-700 hover:bg-brand-800"
          disabled={isSubmitting}
          size="lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Phone className="mr-2 h-4 w-4" />
              Request a Callback
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
