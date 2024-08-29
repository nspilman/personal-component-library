import React from 'react';
import { Navbar, Button, Text, Card, Carousel, Grid, GridItem, Avatar, Badge, List } from '@/components';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-backgroundPrimary">
      {/* Navigation */}
      <Navbar
        logo={<img src="https://ihkgojiseqpwinwdowvm.supabase.co/storage/v1/object/public/component-library-placeholder-images/component-library-logo.png?t=2024-08-25T18%3A51%3A40.801Z" alt="Logo" className="h-8 w-8 sm:h-12 sm:w-12" />}
        title="My Company"
        links={[
          { label: 'Home', href: '#' },
          { label: 'Features', href: '#features' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', href: '#contact' },
        ]}
      />

      {/* Hero Section */}
      <section className="py-6 sm:py-10">
        <Card className="container mx-auto p-4">
          <Grid cols={1} md={2} gap={4}>
            <GridItem className='p-4'>
              <Text variant="h1" className="mb-4 text-3xl sm:text-4xl md:text-5xl">Welcome to Our Amazing Product</Text>
              <Text variant="body1" className="mb-6">Discover the power of innovation with our cutting-edge solution. Streamline your workflow and boost productivity like never before.</Text>
              <Button size="lg" className="w-full sm:w-auto">Get Started</Button>
            </GridItem>
            <GridItem className="mt-6 md:mt-0">
              <img src="https://ihkgojiseqpwinwdowvm.supabase.co/storage/v1/object/public/component-library-placeholder-images/product_image.png?t=2024-08-27T03%3A45%3A31.833Z" alt="Product showcase" className="rounded-lg shadow-lg w-full h-auto md:h-[300px] object-cover" />
            </GridItem>
          </Grid>
        </Card>
      </section>

      {/* Features Section */}
      <section id="features" className="py-8 sm:py-10 bg-backgroundSecondary">
        <div className="container mx-auto px-4">
          <Text variant="h2" className="text-center mb-8 sm:mb-12 text-2xl sm:text-3xl">Key Features</Text>
          <Grid cols={1} sm={2} md={3} gap={6}>
            {[
              { title: 'Easy Integration', description: 'Seamlessly integrate with your existing tools and workflows.' },
              { title: 'Advanced Analytics', description: 'Gain valuable insights with our powerful analytics dashboard.' },
              { title: '24/7 Support', description: 'Our dedicated team is always ready to assist you.' },
            ].map((feature, index) => (
              <GridItem key={index}>
                <Card className='bg-backgroundPrimary p-8'>
                  <Text variant="h4" className="mb-2">{feature.title}</Text>
                  <Text variant="body2">{feature.description}</Text>
                </Card>
              </GridItem>
            ))}
          </Grid>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 sm:py-10">
        <div className="container mx-auto px-4">
          <Text variant="h2" className="text-center mb-8 sm:mb-12 text-2xl sm:text-3xl">What Our Customers Say</Text>
          <Carousel
            slides={[
              <Card key="testimonial1" className="p-6 bg-backgroundPrimary rounded-lg shadow-lg">
                <Text variant="body1" className="mb-4">&quot;This product has revolutionized our business processes. Highly recommended!&quot;</Text>
                <div className="flex items-center">
                  <Avatar src="https://ihkgojiseqpwinwdowvm.supabase.co/storage/v1/object/public/component-library-placeholder-images/default-user.png?t=2024-08-27T04%3A23%3A01.082Z" alt="John Doe" size="sm" />
                  <Text variant="body2" className="ml-2">John Doe, CEO of TechCorp</Text>
                </div>
              </Card>,
              <Card key="testimonial2" className="p-6 bg-backgroundPrimary rounded-lg shadow-lg">
                <Text variant="body1" className="mb-4">&quot;The customer support is outstanding. They&pos;re always there when you need them.&quot;</Text>
                <div className="flex items-center">
                  <Avatar src="https://ihkgojiseqpwinwdowvm.supabase.co/storage/v1/object/public/component-library-placeholder-images/default-user.png?t=2024-08-27T04%3A23%3A38.620Z" alt="Jane Smith" size="sm" />
                  <Text variant="body2" className="ml-2">Jane Smith, CTO of InnovateTech</Text>
                </div>
              </Card>,
            ]}
            showControls={true}
            showIndicators={true}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-8 sm:py-10 bg-backgroundSecondary">
        <div className="container mx-auto px-4">
          <Text variant="h2" className="text-center mb-8 sm:mb-12 text-2xl sm:text-3xl">Flexible Pricing Plans</Text>
          <Grid cols={1} sm={2} md={3} gap={6}>
            {[
              { title: 'Basic', price: '$29', features: ['5 Projects', '10GB Storage', 'Basic Support'] },
              { title: 'Pro', price: '$59', features: ['Unlimited Projects', '100GB Storage', 'Priority Support'] },
              { title: 'Enterprise', price: 'Custom', features: ['Custom Solutions', 'Dedicated Account Manager', '24/7 Premium Support'] },
            ].map((plan, index) => (
              <GridItem key={index}>
                <Card className="text-center py-4 bg-backgroundPrimary">
                  <Text variant="h3" className="mb-2">{plan.title}</Text>
                  <Text variant="h2" className="mb-4">{plan.price}</Text>
                  <List
                    variant="none"
                    items={plan.features.map(feature => (
                      <Text key={feature} variant="body2">{feature}</Text>
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
      <section className="py-8 sm:py-10">
        <div className="container mx-auto px-4 text-center">
          <Text variant="h2" className="mb-4 text-2xl sm:text-3xl">Ready to Get Started?</Text>
          <Text variant="body1" className="mb-6">Join thousands of satisfied customers and take your business to the next level.</Text>
          <Button size="lg" className="w-full sm:w-auto">Sign Up Now</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-textInverse py-8 sm:py-10 bg-backgroundSecondary">
        <div className="container mx-auto px-4">
          <Grid cols={1} sm={2} md={4} gap={6}>
            <GridItem>
              <Text variant="h6" className="mb-4">About Us</Text>
              <Text variant="body2">We are dedicated to providing innovative solutions for businesses of all sizes.</Text>
            </GridItem>
            <GridItem>
              <Text variant="h6" className="mb-4">Quick Links</Text>
              <List
                variant="none"
                items={[
                  <a href="#" key="home" className="hover:underline">Home</a>,
                  <a href="#features" key="features" className="hover:underline">Features</a>,
                  <a href="#pricing" key="pricing" className="hover:underline">Pricing</a>,
                  <a href="#contact" key="contact" className="hover:underline">Contact</a>,
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