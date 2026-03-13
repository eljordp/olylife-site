"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Testimonial {
  name: string;
  age: number;
  location: string;
  condition: string;
  quote: string;
  product: string;
}

const testimonials: Testimonial[] = [
  { name: "Margaret W.", age: 72, location: "Phoenix, AZ", condition: "Chronic knee pain", quote: "After 15 years of knee pain, I can finally walk my neighborhood again. I wake up happy every morning now. My body is free of the heaviness.", product: "Tera-P90" },
  { name: "Robert S.", age: 68, location: "Tampa, FL", condition: "Insomnia", quote: "I hadn't slept through the night in over a decade. After just 10 days with my Tera-P90, I'm sleeping 7 hours straight. My wife says I'm a different person.", product: "Tera-P90" },
  { name: "Dorothy L.", age: 74, location: "Scottsdale, AZ", condition: "Hip pain", quote: "The pain in my hip was so bad I couldn't garden anymore. Two weeks with OlyLife and I'm back in my garden every single day. My grandkids can't believe it.", product: "Tera-P90+" },
  { name: "James T.", age: 71, location: "San Diego, CA", condition: "Circulation issues", quote: "My legs were always cold and tingly. The Tera-P90 changed everything. My circulation improved dramatically, and the numbness in my feet is nearly gone.", product: "Tera-P90" },
  { name: "Helen M.", age: 76, location: "Boca Raton, FL", condition: "Arthritis", quote: "I've tried everything for my arthritis — pills, creams, therapy. Nothing worked like OlyLife. I can open jars again. I can button my own shirts. It's a miracle.", product: "Tera-P90+" },
  { name: "Frank D.", age: 69, location: "Austin, TX", condition: "Back pain", quote: "20 years of back pain and three surgeries later, I'd given up. My daughter bought me the Tera-P90 and within a month, the pain dropped from an 8 to a 2.", product: "Tera-P90" },
  { name: "Patricia K.", age: 73, location: "Denver, CO", condition: "Poor sleep", quote: "I was taking sleeping pills for 8 years. Since using the Tera-P90, I've stopped all sleep medication. I fall asleep naturally and wake up refreshed.", product: "Tera-P90" },
  { name: "George H.", age: 77, location: "Las Vegas, NV", condition: "Shoulder pain", quote: "My frozen shoulder had me in agony for two years. After 3 weeks of daily sessions, I can raise my arm above my head again. My golf buddies are shocked.", product: "Vitality Wand" },
  { name: "Barbara C.", age: 70, location: "Portland, OR", condition: "Night sweats", quote: "Menopause left me with terrible night sweats for years. The Tera-P90 reduced them by 90% in the first month. I actually enjoy sleeping again.", product: "Tera-P90" },
  { name: "Richard M.", age: 75, location: "Tucson, AZ", condition: "Low energy", quote: "I felt exhausted all the time. Now I have more energy at 75 than I did at 60. I'm playing with my grandchildren again. This device gave me my life back.", product: "Tera-P90+" },
  { name: "Mary J.", age: 71, location: "Nashville, TN", condition: "Neck pain", quote: "Years of desk work left me with chronic neck pain. The Vitality Wand targets the exact spot that hurts. The relief is almost instant. I use it every day.", product: "Vitality Wand" },
  { name: "William B.", age: 78, location: "Charlotte, NC", condition: "Leg circulation", quote: "My doctor was worried about my leg circulation. After using OlyLife for 6 weeks, my next checkup showed significant improvement. Even my doctor was impressed.", product: "Tera-P90" },
  { name: "Ruth A.", age: 72, location: "Sarasota, FL", condition: "Stress & anxiety", quote: "The stress was eating me alive. The first time I used the Tera-P90, I felt a calm wash over me. Now it's part of my daily routine. My mood is completely different.", product: "Tera-P90" },
  { name: "Thomas N.", age: 74, location: "Seattle, WA", condition: "Joint stiffness", quote: "Every morning I could barely move. My joints were so stiff. Now I wake up and move freely. I'm walking 3 miles a day at 74 years old. Unbelievable.", product: "Tera-P90+" },
  { name: "Virginia P.", age: 69, location: "Dallas, TX", condition: "Eye strain", quote: "The Galaxy G-One has been incredible for my tired eyes. Years of reading and screen time had taken their toll. Now my eyes feel relaxed and refreshed daily.", product: "Galaxy G-One" },
  { name: "Charles E.", age: 76, location: "Miami, FL", condition: "Chronic fatigue", quote: "I was sleeping 12 hours and still tired. The Tera-P90 gave me real, deep sleep in fewer hours. I wake up at 6 AM ready to go. My wife can't believe it.", product: "Tera-P90" },
  { name: "Elizabeth R.", age: 73, location: "Albuquerque, NM", condition: "Wrist pain", quote: "Carpal tunnel had me in constant pain. The Vitality Wand targets my wrists perfectly. After a month, I'm knitting again. I made sweaters for all my grandkids.", product: "Vitality Wand" },
  { name: "Harold G.", age: 80, location: "Palm Springs, CA", condition: "General wellness", quote: "At 80, I decided to try this device my neighbor wouldn't stop talking about. She was right. I feel 10 years younger. I'm out golfing three times a week.", product: "Tera-P90" },
  { name: "Martha V.", age: 67, location: "Chicago, IL", condition: "Fibromyalgia", quote: "Fibromyalgia made every day a battle. The Tera-P90+ bundle changed my life. The full-body treatment combined with the massager... I can function again.", product: "Tera-P90+" },
  { name: "Donald F.", age: 73, location: "Raleigh, NC", condition: "Plantar fasciitis", quote: "I couldn't walk to my mailbox without pain. Plantar fasciitis ruined my retirement plans. Two months with OlyLife and I'm hiking again. Actually hiking.", product: "Tera-P90" },
  { name: "Nancy S.", age: 70, location: "Honolulu, HI", condition: "Inflammation", quote: "My inflammation markers were through the roof. I started using the Tera-P90 daily. My next blood work shocked my doctor — inflammation cut in half.", product: "Tera-P90" },
  { name: "Kenneth W.", age: 75, location: "Sacramento, CA", condition: "Muscle cramps", quote: "Terrible leg cramps would wake me up screaming at 2 AM. Since OlyLife, I haven't had a single cramp in three months. I sleep peacefully now.", product: "Tera-P90" },
  { name: "Carol H.", age: 68, location: "Boise, ID", condition: "Headaches", quote: "I was getting migraines 3-4 times a week. The Tera-P90 brought that down to maybe once a month. I've gotten my life back. No more dark rooms and ice packs.", product: "Tera-P90" },
  { name: "Raymond T.", age: 72, location: "San Antonio, TX", condition: "Post-surgery recovery", quote: "After my knee replacement, recovery was brutal. My physical therapist was amazed at how fast I healed once I started using the Tera-P90. Weeks ahead of schedule.", product: "Tera-P90" },
  { name: "Betty L.", age: 79, location: "St. Petersburg, FL", condition: "Bone health", quote: "My osteoporosis diagnosis terrified me. I started using OlyLife alongside my treatment plan. My bone density scan improved for the first time in years.", product: "Tera-P90+" },
  { name: "Paul C.", age: 71, location: "Minneapolis, MN", condition: "Cold extremities", quote: "Living in Minnesota with poor circulation was torture. My fingers and toes were always ice cold. The Tera-P90 improved my circulation in ways I didn't think possible.", product: "Tera-P90" },
  { name: "Shirley M.", age: 74, location: "Sedona, AZ", condition: "Emotional wellness", quote: "I was in a dark place after losing my husband. The Tera-P90 sessions became my healing ritual. The calm, the clarity... it helped me find peace again.", product: "Tera-P90" },
  { name: "Edward K.", age: 76, location: "Orlando, FL", condition: "Tennis elbow", quote: "Tennis elbow ended my 30-year tennis career. Or so I thought. The Vitality Wand brought my elbow back to life. I played doubles last Saturday. I won.", product: "Vitality Wand" },
  { name: "Doris P.", age: 70, location: "Savannah, GA", condition: "Sciatica", quote: "Sciatica made sitting, standing, and lying down all painful. There was no comfortable position. After 6 weeks of Tera-P90 sessions, I sit in my rocking chair pain-free.", product: "Tera-P90" },
  { name: "Ronald W.", age: 73, location: "Spokane, WA", condition: "Respiratory", quote: "My breathing was getting worse every year. The Tera-P90 treatments helped me breathe easier. My oxygen levels have actually improved.", product: "Tera-P90" },
  { name: "Janet R.", age: 67, location: "Asheville, NC", condition: "Weight management", quote: "I never expected a therapy device to help with weight, but improved sleep and less pain meant I could exercise again. I've lost 15 pounds in 3 months.", product: "Tera-P90+" },
  { name: "Walter S.", age: 78, location: "Clearwater, FL", condition: "Restless legs", quote: "Restless leg syndrome made nights unbearable. My wife was ready to sleep in another room. After two weeks with OlyLife, my legs are calm. We both sleep now.", product: "Tera-P90" },
  { name: "Evelyn D.", age: 71, location: "Reno, NV", condition: "Digestive issues", quote: "My stomach issues were constant. Bloating, discomfort after every meal. Using the Tera-P90 on my abdomen area brought relief I never found from any medication.", product: "Tera-P90" },
  { name: "Arthur J.", age: 74, location: "Lexington, KY", condition: "Neuropathy", quote: "Diabetic neuropathy left my feet numb and burning. The Tera-P90 sessions brought feeling back to my toes for the first time in 5 years. I cried when I felt the carpet.", product: "Tera-P90" },
  { name: "Marie G.", age: 69, location: "Santa Fe, NM", condition: "Wound healing", quote: "A stubborn wound on my leg wouldn't heal for months. I started using the Tera-P90 on the area and it healed in 3 weeks. My doctor was astonished.", product: "Tera-P90" },
  { name: "Howard N.", age: 77, location: "Myrtle Beach, SC", condition: "Balance", quote: "I was falling frequently and scared to walk alone. After a month of daily OlyLife sessions, my balance improved dramatically. I feel steady on my feet again.", product: "Tera-P90" },
  { name: "Judith B.", age: 72, location: "Tempe, AZ", condition: "Morning stiffness", quote: "It used to take me 45 minutes of stretching just to function in the morning. Now I hop out of bed in 5 minutes. I do a Tera-P90 session every evening before bed.", product: "Tera-P90" },
  { name: "Carl M.", age: 70, location: "Fort Worth, TX", condition: "Stress relief", quote: "Retirement stress is real — nobody tells you that. The Tera-P90 became my daily decompression session. 30 minutes and I feel like I just had a week of vacation.", product: "Tera-P90" },
  { name: "Gladys F.", age: 75, location: "Naples, FL", condition: "Eye floaters", quote: "Those annoying eye floaters were driving me crazy for years. The Galaxy G-One eye massager reduced them significantly. I can see clearly again.", product: "Galaxy G-One" },
  { name: "Lawrence R.", age: 73, location: "Eugene, OR", condition: "Shoulder recovery", quote: "A torn rotator cuff that 'healed' still gave me constant pain. Physical therapy helped some. The Vitality Wand finished the job. Full range of motion restored.", product: "Vitality Wand" },
  { name: "Rose T.", age: 76, location: "Mobile, AL", condition: "Immune support", quote: "I used to catch every cold that went around. Since using OlyLife daily, I haven't been sick in 8 months. My immune system finally feels strong.", product: "Tera-P90" },
  { name: "Gerald A.", age: 71, location: "Colorado Springs, CO", condition: "Blood pressure", quote: "My blood pressure was always borderline high despite medication. After adding OlyLife to my routine, my numbers stabilized. My cardiologist asked what changed.", product: "Tera-P90" },
  { name: "Alma H.", age: 78, location: "Pensacola, FL", condition: "Chronic fatigue", quote: "I thought being tired was just part of aging. The Tera-P90 proved me wrong. I have energy I haven't felt in 20 years. I'm volunteering at the shelter again.", product: "Tera-P90+" },
  { name: "Stanley V.", age: 74, location: "Fresno, CA", condition: "Hand tremors", quote: "My hand tremors were getting worse. I could barely hold a cup of coffee. After 6 weeks of daily Tera-P90 sessions, the tremors reduced by about 70%.", product: "Tera-P90" },
  { name: "Phyllis W.", age: 72, location: "Tulsa, OK", condition: "Vertigo", quote: "Vertigo episodes were terrifying and unpredictable. Since I started OlyLife therapy, I've had maybe two mild episodes in four months. Before, it was weekly.", product: "Tera-P90" },
  { name: "Vernon C.", age: 75, location: "Richmond, VA", condition: "Ankle pain", quote: "An old basketball injury left my ankle aching for 30 years. The Vitality Wand applied directly to the joint — the relief was incredible. Like turning back the clock.", product: "Vitality Wand" },
  { name: "Mildred E.", age: 80, location: "Sioux Falls, SD", condition: "Vitality", quote: "I bought this for my 80th birthday. Best gift I ever gave myself. My children say I look 10 years younger and act 20 years younger. I feel alive again.", product: "Tera-P90+" },
  { name: "Clifford L.", age: 69, location: "Chattanooga, TN", condition: "Knee recovery", quote: "My second knee replacement recovery was dramatically better than my first — the only difference was OlyLife. My surgeon noticed and asked about it.", product: "Tera-P90" },
  { name: "Lorraine S.", age: 73, location: "Palm Beach, FL", condition: "Skin rejuvenation", quote: "The Frost Age Beauty Device in the P90+ bundle is magical. My skin looks tighter, brighter, more alive. My friends keep asking what I've been doing differently.", product: "Tera-P90+" },
  { name: "Norman D.", age: 76, location: "Knoxville, TN", condition: "Hip pain", quote: "My doctor said I needed a hip replacement. I used the Tera-P90 for 3 months while I waited. The pain reduced so much, my doctor postponed the surgery.", product: "Tera-P90" },
  { name: "Elaine B.", age: 70, location: "Madison, WI", condition: "Anxiety", quote: "Anxiety was ruining my golden years. The Tera-P90 sessions calm my nervous system like nothing else. I feel centered, peaceful. My family sees the difference.", product: "Tera-P90" },
  { name: "Roger K.", age: 77, location: "Little Rock, AR", condition: "Sinus issues", quote: "Chronic sinus congestion for decades. The terahertz frequency therapy opened up my airways in ways no medication ever did. I breathe freely for the first time.", product: "Tera-P90" },
  { name: "Lucille P.", age: 74, location: "Wilmington, DE", condition: "Carpal tunnel", quote: "Carpal tunnel surgery was scheduled. I tried OlyLife as a last resort. Six weeks later, I cancelled the surgery. My wrists feel normal again.", product: "Vitality Wand" },
  { name: "Chester G.", age: 79, location: "Sun City, AZ", condition: "Prostate health", quote: "Prostate issues were affecting my quality of life enormously. The Tera-P90 sessions made a noticeable difference within the first month. I feel like a younger man.", product: "Tera-P90" },
  { name: "Agnes M.", age: 71, location: "Hilton Head, SC", condition: "Lymphatic health", quote: "My legs were always swollen. The Tera-P90 improved my lymphatic drainage visibly. My ankles are normal sized for the first time in years.", product: "Tera-P90" },
  { name: "Harvey R.", age: 73, location: "Prescott, AZ", condition: "Tinnitus", quote: "The ringing in my ears was driving me insane. OlyLife reduced it by about 60%. For the first time in years, I can enjoy silence.", product: "Tera-P90" },
  { name: "Frances T.", age: 68, location: "Hilton Head, SC", condition: "Eczema", quote: "Eczema covered my arms and hands for years. The combination of improved circulation and cellular therapy from OlyLife cleared it up dramatically.", product: "Tera-P90" },
  { name: "Albert N.", age: 75, location: "Scottsdale, AZ", condition: "Couple's wellness", quote: "My wife bought two Tera-P90s — one for each of us. We do our sessions together every evening. We're both sleeping better, moving better, and enjoying life more.", product: "Tera-P90" },
  { name: "Bernice H.", age: 77, location: "The Villages, FL", condition: "Bone density", quote: "My DEXA scan showed my bone density improving for the first time since menopause. The only thing I added to my routine was OlyLife. My doctor is thrilled.", product: "Tera-P90+" },
  { name: "Leonard J.", age: 72, location: "Branson, MO", condition: "Wound healing", quote: "A diabetic wound on my foot wouldn't heal for 4 months. Started OlyLife sessions focusing on the area. In three weeks, the wound closed. My podiatrist called it remarkable.", product: "Tera-P90" },
  { name: "Vivian C.", age: 69, location: "Sedona, AZ", condition: "Mental clarity", quote: "Brain fog was stealing my sharp mind. I couldn't remember names, dates, or where I put things. After a month of daily OlyLife sessions, my mental clarity is back.", product: "Tera-P90" },
  { name: "Oscar W.", age: 74, location: "Fort Myers, FL", condition: "Gout", quote: "Gout flare-ups were crippling me every few weeks. Since using the Tera-P90 consistently, I've gone 4 months without a single flare. That's a record for me.", product: "Tera-P90" },
  { name: "Hazel F.", age: 76, location: "Laguna Beach, CA", condition: "Skin health", quote: "At 76, I wasn't expecting skincare miracles. But the Frost Age device tightened my jawline noticeably. My daughter borrowed it and now she wants her own.", product: "Tera-P90+" },
  { name: "Clarence D.", age: 78, location: "Destin, FL", condition: "Medication reduction", quote: "I bought OlyLife because I'm tired of pills. I take 8 medications daily. After 3 months, my doctor reduced two of them. That's the kind of result that matters.", product: "Tera-P90" },
  { name: "Irene S.", age: 73, location: "Branson, MO", condition: "Depression", quote: "Nothing felt joyful anymore. I was going through the motions. The Tera-P90 lifted something in me. I paint again. I garden. I laugh. I feel human again.", product: "Tera-P90" },
  { name: "Ralph E.", age: 71, location: "Mesa, AZ", condition: "Inflammation", quote: "My CRP levels were dangerously high. After 8 weeks of consistent OlyLife therapy, my inflammation markers dropped by 45%. My rheumatologist was genuinely impressed.", product: "Tera-P90" },
  { name: "Edna R.", age: 79, location: "Savannah, GA", condition: "Mobility", quote: "I went from using a walker to walking independently in two months. My physical therapist credits the combination of PT and OlyLife. I credit the device.", product: "Tera-P90+" },
  { name: "Russell M.", age: 70, location: "Bend, OR", condition: "Sleep quality", quote: "My sleep apnea was severe. OlyLife improved my overall sleep quality so much that I actually feel rested for the first time in years.", product: "Tera-P90" },
  { name: "Thelma K.", age: 75, location: "Key West, FL", condition: "Post-surgery", quote: "After my mastectomy, lymphedema in my arm was constant. OlyLife treatments reduced the swelling noticeably. I can wear my watch again. Small thing, huge victory.", product: "Tera-P90" },
  { name: "Wallace B.", age: 72, location: "Lake Tahoe, CA", condition: "Recovery", quote: "I'm an active 72-year-old — skiing, hiking, biking. OlyLife cut my recovery time in half. I'm not sore for days anymore. One session and I'm ready to go.", product: "Tera-P90" },
  { name: "Pearl G.", age: 81, location: "Naples, FL", condition: "Longevity", quote: "My secret to being 81 and feeling 60? OlyLife, walking, and gratitude. This device is the best investment I've ever made in my health. I tell everyone.", product: "Tera-P90+" },
  { name: "Eugene A.", age: 74, location: "Tucson, AZ", condition: "Spinal stenosis", quote: "Spinal stenosis had me considering surgery. My neighbor lent me his Tera-P90 for a week. I bought my own the next day. The pain relief is that immediate.", product: "Tera-P90" },
  { name: "Beatrice L.", age: 70, location: "Charleston, SC", condition: "Hormonal balance", quote: "Hot flashes, mood swings, insomnia — menopause hit me hard even into my 70s. The Tera-P90 calmed everything down. My husband says I'm easier to live with now.", product: "Tera-P90" },
  { name: "Floyd N.", age: 76, location: "Scottsdale, AZ", condition: "Frozen shoulder", quote: "Frozen shoulder for 18 months. Three cortisone shots did nothing. One month of daily Tera-P90 sessions and Vitality Wand work — full range of motion is back.", product: "Tera-P90" },
  { name: "Lois C.", age: 72, location: "Sarasota, FL", condition: "Chronic pain", quote: "I was on pain medication for 12 years. After 4 months of OlyLife, I'm down to over-the-counter Tylenol occasionally. My pain doctor supports continuing.", product: "Tera-P90+" },
  { name: "Henry T.", age: 77, location: "Palm Desert, CA", condition: "Cognitive function", quote: "My memory was slipping and it scared me. After consistent Tera-P90 use, my mental sharpness returned. I beat my son at chess last week for the first time in years.", product: "Tera-P90" },
  { name: "Louise R.", age: 75, location: "Jupiter, FL", condition: "Daily wellness", quote: "OlyLife isn't just a device — it's my daily wellness ritual. 30 minutes every morning with my coffee. I'm healthier, happier, and more at peace than I've been in decades.", product: "Tera-P90" },
  { name: "Mabel D.", age: 80, location: "The Villages, FL", condition: "Quality of life", quote: "I'm 80 and I dance. I swim. I travel. People ask my secret and I show them my Tera-P90. This little device gave me a second life. I'm not exaggerating.", product: "Tera-P90" },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="bg-background border border-sand/60 p-8 min-w-[340px] max-w-[400px] flex-shrink-0 mx-3 hover:border-copper/30 transition-colors duration-500">
      <p className="text-charcoal/70 text-[15px] leading-[1.85] font-light mb-6 line-clamp-5 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="pt-5 border-t border-sand/40">
        <p className="font-medium text-charcoal text-[14px]">
          {testimonial.name}
        </p>
        <p className="text-[12px] text-warm-gray mt-0.5">
          {testimonial.age} &middot; {testimonial.location}
        </p>
        <p className="text-[11px] tracking-[0.15em] uppercase text-sage mt-2 font-light">
          {testimonial.condition} &middot; {testimonial.product}
        </p>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const row1 = testimonials.slice(0, 26);
  const row2 = testimonials.slice(26, 52);
  const row3 = testimonials.slice(52);

  return (
    <section
      id="testimonials"
      className="py-28 md:py-40 bg-ivory overflow-hidden"
      ref={ref}
      aria-label="OlyLife customer testimonials and reviews"
    >
      <div className="max-w-6xl mx-auto px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[12px] tracking-[0.3em] uppercase text-sage mb-4 font-light">
            Their Words, Not Ours
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-[1.15]">
              Real people.
              <br />
              <em className="text-copper">Real healing.</em>
            </h2>
            <div>
              <p className="text-warm-gray text-[15px] leading-relaxed font-light">
                Over 50,000 people across 30 countries have experienced what
                OlyLife can do. These are their stories — unscripted, unfiltered,
                and deeply personal.
              </p>
              <div className="flex gap-12 mt-6">
                <div>
                  <p className="font-serif text-3xl text-charcoal">50,000+</p>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-warm-gray mt-1">
                    Customers
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-charcoal">4.9</p>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-warm-gray mt-1">
                    Avg Rating
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-charcoal">97%</p>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-warm-gray mt-1">
                    Recommend
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scrolling rows */}
      <div className="space-y-4">
        <div className="flex animate-scroll-left" style={{ width: "max-content" }}>
          {[...row1, ...row1].map((t, i) => (
            <TestimonialCard key={`r1-${i}`} testimonial={t} />
          ))}
        </div>
        <div className="flex animate-scroll-right" style={{ width: "max-content" }}>
          {[...row2, ...row2].map((t, i) => (
            <TestimonialCard key={`r2-${i}`} testimonial={t} />
          ))}
        </div>
        <div
          className="flex animate-scroll-left"
          style={{ width: "max-content", animationDuration: "140s" }}
        >
          {[...row3, ...row3].map((t, i) => (
            <TestimonialCard key={`r3-${i}`} testimonial={t} />
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 mt-20 text-center">
        <p className="text-[11px] text-warm-gray/50 leading-relaxed font-light tracking-wide">
          Individual results may vary. These statements have not been evaluated
          by the FDA. OlyLife products are not intended to diagnose, treat,
          cure, or prevent any disease.
        </p>
      </div>
    </section>
  );
}
