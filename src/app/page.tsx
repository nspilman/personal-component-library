import React from 'react';
import { Navbar, Button, Text, Card, Carousel, Grid, GridItem, Avatar, Badge, List } from '@/components';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-backgroundPrimary">
      {/* Navigation */}
      <Navbar
        logo={<img src="/api/placeholder/120/40" alt="Logo" />}
        links={[
          { label: 'Home', href: '#' },
          { label: 'Features', href: '#features' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', href: '#contact' },
        ]}
      />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Grid cols={2} gap={8}>
            <GridItem>
              <Text variant="h1" className="mb-4">Welcome to Our Amazing Product</Text>
              <Text variant="body1" className="mb-6">Discover the power of innovation with our cutting-edge solution. Streamline your workflow and boost productivity like never before.</Text>
              <Button size="lg">Get Started</Button>
            </GridItem>
            <GridItem>
              <img src="/api/placeholder/600/400" alt="Product showcase" className="rounded-lg shadow-lg" />
            </GridItem>
          </Grid>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-backgroundSecondary">
        <div className="container mx-auto px-4">
          <Text variant="h2" className="text-center mb-12">Key Features</Text>
          <Grid cols={3} gap={6}>
            {[
              { title: 'Easy Integration', description: 'Seamlessly integrate with your existing tools and workflows.' },
              { title: 'Advanced Analytics', description: 'Gain valuable insights with our powerful analytics dashboard.' },
              { title: '24/7 Support', description: 'Our dedicated team is always ready to assist you.' },
            ].map((feature, index) => (
              <GridItem key={index}>
                <Card>
                  <Text variant="h4" className="mb-2">{feature.title}</Text>
                  <Text variant="body2">{feature.description}</Text>
                </Card>
              </GridItem>
            ))}
          </Grid>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Text variant="h2" className="text-center mb-12">What Our Customers Say</Text>
          <Carousel
            slides={[
              <div className="p-6 bg-backgroundPrimary rounded-lg shadow-lg">
                <Text variant="body1" className="mb-4">"This product has revolutionized our business processes. Highly recommended!"</Text>
                <div className="flex items-center">
                  <Avatar src="/api/placeholder/40/40" alt="John Doe" size="sm" />
                  <Text variant="body2" className="ml-2">John Doe, CEO of TechCorp</Text>
                </div>
              </div>,
              <div className="p-6 bg-backgroundPrimary rounded-lg shadow-lg">
                <Text variant="body1" className="mb-4">"The customer support is outstanding. They're always there when you need them."</Text>
                <div className="flex items-center">
                  <Avatar src="/api/placeholder/40/40" alt="Jane Smith" size="sm" />
                  <Text variant="body2" className="ml-2">Jane Smith, CTO of InnovateTech</Text>
                </div>
              </div>,
            ]}
            showControls={true}
            showIndicators={true}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-backgroundSecondary">
        <div className="container mx-auto px-4">
          <Text variant="h2" className="text-center mb-12">Flexible Pricing Plans</Text>
          <Grid cols={3} gap={6}>
            {[
              { title: 'Basic', price: '$29', features: ['5 Projects', '10GB Storage', 'Basic Support'] },
              { title: 'Pro', price: '$59', features: ['Unlimited Projects', '100GB Storage', 'Priority Support'] },
              { title: 'Enterprise', price: 'Custom', features: ['Custom Solutions', 'Dedicated Account Manager', '24/7 Premium Support'] },
            ].map((plan, index) => (
              <GridItem key={index}>
                <Card className="text-center">
                  <Text variant="h3" className="mb-2">{plan.title}</Text>
                  <Text variant="h2" className="mb-4">{plan.price}</Text>
                  <List
                    variant="none"
                    items={plan.features.map(feature => (
                      <Text variant="body2">{feature}</Text>
                    ))}
                    className="mb-6"
                  />
                  <Button variant={index === 1 ? 'primary' : 'secondary'}>Choose Plan</Button>
                </Card>
              </GridItem>
            ))}
          </Grid>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Text variant="h2" className="mb-4">Ready to Get Started?</Text>
          <Text variant="body1" className="mb-6">Join thousands of satisfied customers and take your business to the next level.</Text>
          <Button size="lg">Sign Up Now</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-backgroundInverse text-textInverse py-10">
        <div className="container mx-auto px-4">
          <Grid cols={4} gap={6}>
            <GridItem>
              <Text variant="h6" className="mb-4">About Us</Text>
              <Text variant="body2">We are dedicated to providing innovative solutions for businesses of all sizes.</Text>
            </GridItem>
            <GridItem>
              <Text variant="h6" className="mb-4">Quick Links</Text>
              <List
                variant="none"
                items={[
                  <a href="#" className="hover:underline">Home</a>,
                  <a href="#features" className="hover:underline">Features</a>,
                  <a href="#pricing" className="hover:underline">Pricing</a>,
                  <a href="#contact" className="hover:underline">Contact</a>,
                ]}
              />
            </GridItem>
            <GridItem>
              <Text variant="h6" className="mb-4">Contact Us</Text>
              <Text variant="body2">123 Tech Street, San Francisco, CA 94107</Text>
              <Text variant="body2">support@example.com</Text>
              <Text variant="body2">+1 (555) 123-4567</Text>
            </GridItem>
            <GridItem>
              <Text variant="h6" className="mb-4">Follow Us</Text>
              <div className="flex space-x-2">
                <Badge variant="primary">Facebook</Badge>
                <Badge variant="primary">Twitter</Badge>
                <Badge variant="primary">LinkedIn</Badge>
              </div>
            </GridItem>
          </Grid>
          <Text variant="body2" className="text-center mt-8">&copy; 2024 Your Company Name. All rights reserved.</Text>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;