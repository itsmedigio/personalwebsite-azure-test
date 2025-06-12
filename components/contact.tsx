"use client"

import { Button } from "@/components/ui/button"; // Import Button
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input"; // Import Input
import { Label } from "@/components/ui/label"; // Import Label
import { Textarea } from "@/components/ui/textarea"; // Import Textarea
import { useForm, ValidationError } from '@formspree/react';
import { Mail, MapPin } from "lucide-react";
import { useState } from "react"; // useState is already imported

export function Contact() {
  // formData state is not needed here if you are using Formspree's handleSubmit directly
  // and letting it manage the form data via name attributes.
  // We'll keep it for clarity if you decide to add more client-side validation later,
  // but it's not strictly used by Formspree's basic integration.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // This handleChange function is still useful if you want to control inputs,
  // or if you re-introduce client-side validation before submission.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  // --- ContactForm component updated ---
  function ContactForm() {
    // Make sure 'xvgrabqj' is your actual Formspree form ID
    const [state, handleSubmit] = useForm("xvgrabqj");

    // Display success message
    if (state.succeeded) {
      return (
        <div className="text-center py-8">
          <p className="text-lg font-semibold text-green-600">Thanks for contacting me!</p>
          <p className="text-muted-foreground mt-2">I'll get back to you as soon as possible.</p>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-4"> {/* Use space-y-4 for consistent spacing */}

        {/* Email Input */}
        <div>
          <Label htmlFor="email">Your Email Address</Label>
          <Input
            id="email"
            type="email"
            name="email"
            required // Add required attribute
          // value={formData.email}
          // onChange={handleChange}
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500 text-sm mt-1" // Style error messages
          />
        </div>

        {/* Message Textarea */}
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            rows={4} // Consistent row count for textarea
            required // Add required attribute
          // value={formData.message}
          // onChange={handleChange}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-500 text-sm mt-1" // Style error messages
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" disabled={state.submitting} className="w-full">
          {state.submitting ? "Sending..." : "Send Message"} {/* Provide feedback during submission */}
        </Button>

        {/* General Form Error (if any, e.g., network issues) */}
        <ValidationError
          errors={state.errors}
          className="text-red-500 text-sm mt-1" // Style general errors
        />
      </form>
    );
  }

  // --- Main Contact section remains the same ---
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-muted-foreground mb-8">
              Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from
              you. Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>davidedigiovanni999@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Turin, Italy</span>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Render the updated ContactForm component */}
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}