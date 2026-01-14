import React from 'react';
import FinalCTA from './FinalCTA';
import Footer from './Footer';

const Methods: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-red-700 selection:text-white overflow-x-hidden">
      <div className="pt-20">
        <section className="relative h-[500px] md:h-[600px] flex items-center justify-center bg-gradient-to-b from-black/40 to-black/80" style={{backgroundImage: 'url("https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=1600")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 reveal">Training method</h1>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-12 bg-black">
          <div className="max-w-4xl mx-auto">
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-black mb-8 text-center">The Mind over Matter Health & Fitness training method and principles</h2>
              <p className="text-white/70 text-center mb-6 leading-relaxed">
                Our training method is a blend of innovative exercise that is low tech, based on biomechanically based. You receive detailed instruction on exercise safety, and we ensure you're training is optimized for fat loss, because we understand the subject can be more complex.
              </p>
              <p className="text-white/70 text-center leading-relaxed">
                Here are 4 fundamental principles embedded in the relationship that we use to boost our clients' fitness & fitness to produce the best results for our clients.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-12 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="reveal">
                <h3 className="text-2xl md:text-3xl font-black mb-6">1. Principle of "high-intensity training - HIT"</h3>
                <p className="text-white/70 leading-relaxed">
                  To stimulate your body to make an engine change, the intensity of your training is fundamental. By training with optimal intensity and leveraging features of high-intensity training (HIT), when you exert such levels, you will experience muscular fatigue and an improved metabolism in muscles.
                </p>
              </div>
              <div className="reveal overflow-hidden rounded-lg">
                <img src="https://images.pexels.com/photos/3762285/pexels-photo-3762285.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="High intensity training" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="reveal overflow-hidden rounded-lg md:order-2">
                <img src="https://images.pexels.com/photos/4744125/pexels-photo-4744125.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Short training sessions" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="reveal md:order-1">
                <h3 className="text-2xl md:text-3xl font-black mb-6">2. Principle of "Short training sessions"</h3>
                <p className="text-white/70 leading-relaxed">
                  Our training sessions last approximately 45 minutes. The workout consists of the necessary essential performed combined with proven hours. We aim for the equipment amount of workouts.
                </p>
                <p className="text-white/70 leading-relaxed mt-4">
                  Applying focused bit amount of exercise brings recuperation produced recovery therapies.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="reveal">
                <h3 className="text-2xl md:text-3xl font-black mb-6">3. Infrequent training sessions</h3>
                <p className="text-white/70 leading-relaxed">
                  Reaching the required stimulus needed intensity intensity intensity of your recovery recuperate large amount of your efforts and subsequent adaptation changes are indicated.
                </p>
                <p className="text-white/70 leading-relaxed mt-4">
                  Implementing resources and making protocols, tremendous takes time, Understanding the stimulus is workload one will learn not input precise.
                </p>
                <p className="text-white/70 leading-relaxed mt-4">
                  Unfortunately, many strength athletes train too hard, too often, and with inadequately intensity. This is why the most impactful in the context of "minimal body development" is a change concept.
                </p>
                <p className="text-white/70 leading-relaxed mt-4">
                  Since the body changes gradually to the necessary phase through strengthening & running at full capacity but you should look and maintain training more than once every other day or more.
                </p>
              </div>
              <div className="reveal overflow-hidden rounded-lg">
                <img src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Infrequent training" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="reveal overflow-hidden rounded-lg md:order-2">
                <img src="https://images.pexels.com/photos/3969365/pexels-photo-3969365.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Accurate recording" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="reveal md:order-1">
                <h3 className="text-2xl md:text-3xl font-black mb-6">4. Accurate recording</h3>
                <p className="text-white/70 leading-relaxed">
                  Ensuring accurate records of your training performance allows us to know if you are making satisfying. Activity, and frequency needs.
                </p>
                <p className="text-white/70 leading-relaxed mt-4">
                  By tracking this, our offers can track progress on each training session.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </div>
      <Footer />
    </div>
  );
};

export default Methods;
