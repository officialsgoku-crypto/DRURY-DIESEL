import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    // Form will be handled by Netlify
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting Drury Diesel Company. We'll get back to you soon.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section 
      id="contact" 
      className="parallax-section hero-gradient py-12 px-8 mb-0 text-foreground bg-cover bg-fixed"
      style={{
        backgroundImage: "url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/17ac5dd9-3283-4b21-a8b9-9ef1b46274f7.png')"
      }}
    >
      <div className="content max-w-2xl mx-auto bg-black/90 p-8 rounded-xl">
        <h2 className="section-title text-primary border-b-2 border-primary pb-3 mb-6 font-bold text-4xl mt-0">
          Contact Us
        </h2>
        <p className="mb-6">
          Have a question or need to book your truck in for service? The team at Drury Diesel Company is here to help. 
          Whether it's repairs, servicing, diagnostics, or roadside breakdowns, we're just a call away.
        </p>
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true" 
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit} 
          className="max-w-lg mx-auto"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div style={{ display: 'none' }}>
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </div>
          <div className="mb-6">
            <Label htmlFor="firstName" className="block mb-2 font-semibold text-primary">
              First Name <span className="text-destructive">*</span>
            </Label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              required
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 mb-6 border-2 border-muted rounded-md text-base bg-foreground text-background transition-colors duration-300 focus:border-primary"
            />
          </div>

          <div className="mb-6">
            <Label htmlFor="lastName" className="block mb-2 font-semibold text-primary">
              Last Name <span className="text-destructive">*</span>
            </Label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              required
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 mb-6 border-2 border-muted rounded-md text-base bg-foreground text-background transition-colors duration-300 focus:border-primary"
            />
          </div>

          <div className="mb-6">
            <Label htmlFor="email" className="block mb-2 font-semibold text-primary">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mb-6 border-2 border-muted rounded-md text-base bg-foreground text-background transition-colors duration-300 focus:border-primary"
            />
          </div>

          <div className="mb-6">
            <Label htmlFor="message" className="block mb-2 font-semibold text-primary">
              Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 mb-6 border-2 border-muted rounded-md text-base bg-foreground text-background transition-colors duration-300 focus:border-primary min-h-[150px] resize-y"
            />
          </div>

          <Button 
            type="submit"
            className="bg-primary text-primary-foreground border-none py-4 px-8 text-xl rounded-md cursor-pointer transition-all duration-300 hover:bg-diesel-blue-hover hover:-translate-y-1"
          >
            Send
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;