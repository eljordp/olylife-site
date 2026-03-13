"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  age: number;
  location: string;
  condition: string;
  quote: string;
  rating: number;
  product: string;
}

const testimonials: Testimonial[] = [
  { name: "Margaret W.", age: 72, location: "Phoenix, AZ", condition: "Chronic knee pain", quote: "After 15 years of knee pain, I can finally walk my neighborhood again. I wake up happy every morning now! My body is FREE of the heaviness.", rating: 5, product: "Tera-P90" },
  { name: "Robert S.", age: 68, location: "Tampa, FL", condition: "Insomnia", quote: "I hadn't slept through the night in over a decade. After just 10 days with my Tera-P90, I'm sleeping 7 hours straight. My wife says I'm a different person.", rating: 5, product: "Tera-P90" },
  { name: "Dorothy L.", age: 74, location: "Scottsdale, AZ", condition: "Hip pain", quote: "The pain in my hip was so bad I couldn't garden anymore. Two weeks with OlyLife and I'm back in my garden every single day. My grandkids can't believe it.", rating: 5, product: "Tera-P90+" },
  { name: "James T.", age: 71, location: "San Diego, CA", condition: "Circulation issues", quote: "My legs were always cold and tingly. The Tera-P90 changed everything. My circulation improved dramatically, and the numbness in my feet is nearly gone.", rating: 5, product: "Tera-P90" },
  { name: "Helen M.", age: 76, location: "Boca Raton, FL", condition: "Arthritis", quote: "I've tried everything for my arthritis — pills, creams, therapy. Nothing worked like OlyLife. I can open jars again! I can button my own shirts. It's a miracle.", rating: 5, product: "Tera-P90+" },
  { name: "Frank D.", age: 69, location: "Austin, TX", condition: "Back pain", quote: "20 years of back pain and three surgeries later, I'd given up. My daughter bought me the Tera-P90 and within a month, the pain dropped from an 8 to a 2.", rating: 5, product: "Tera-P90" },
  { name: "Patricia K.", age: 73, location: "Denver, CO", condition: "Poor sleep", quote: "I was taking sleeping pills for 8 years. Since using the Tera-P90, I've stopped all sleep medication. I fall asleep naturally and wake up refreshed.", rating: 5, product: "Tera-P90" },
  { name: "George H.", age: 77, location: "Las Vegas, NV", condition: "Shoulder pain", quote: "My frozen shoulder had me in agony for two years. After 3 weeks of daily sessions, I can raise my arm above my head again. My golf buddies are shocked.", rating: 5, product: "Vitality Wand" },
  { name: "Barbara C.", age: 70, location: "Portland, OR", condition: "Night sweats", quote: "Menopause left me with terrible night sweats for years. The Tera-P90 reduced them by 90% in the first month. I actually enjoy sleeping again.", rating: 5, product: "Tera-P90" },
  { name: "Richard M.", age: 75, location: "Tucson, AZ", condition: "Low energy", quote: "I felt exhausted all the time. Now I have more energy at 75 than I did at 60. I'm playing with my grandchildren again. This device gave me my life back.", rating: 5, product: "Tera-P90+" },
  { name: "Mary J.", age: 71, location: "Nashville, TN", condition: "Neck pain", quote: "Years of desk work left me with chronic neck pain. The Vitality Wand targets the exact spot that hurts. The relief is almost instant. I use it every day.", rating: 5, product: "Vitality Wand" },
  { name: "William B.", age: 78, location: "Charlotte, NC", condition: "Leg circulation", quote: "My doctor was worried about my leg circulation. After using OlyLife for 6 weeks, my next checkup showed significant improvement. Even my doctor was impressed.", rating: 5, product: "Tera-P90" },
  { name: "Ruth A.", age: 72, location: "Sarasota, FL", condition: "Stress & anxiety", quote: "The stress was eating me alive. The first time I used the Tera-P90, I felt a calm wash over me. Now it's part of my daily routine. My mood is FREE of the grumpiness.", rating: 5, product: "Tera-P90" },
  { name: "Thomas N.", age: 74, location: "Seattle, WA", condition: "Joint stiffness", quote: "Every morning I could barely move. My joints were so stiff. Now I wake up and move freely. I'm walking 3 miles a day at 74 years old. Unbelievable.", rating: 5, product: "Tera-P90+" },
  { name: "Virginia P.", age: 69, location: "Dallas, TX", condition: "Eye strain", quote: "The Galaxy G-One has been incredible for my tired eyes. Years of reading and screen time had taken their toll. Now my eyes feel relaxed and refreshed daily.", rating: 5, product: "Galaxy G-One" },
  { name: "Charles E.", age: 76, location: "Miami, FL", condition: "Chronic fatigue", quote: "I was sleeping 12 hours and still tired. The Tera-P90 gave me real, deep sleep in fewer hours. I wake up at 6 AM ready to go. My wife can't believe it.", rating: 5, product: "Tera-P90" },
  { name: "Elizabeth R.", age: 73, location: "Albuquerque, NM", condition: "Wrist pain", quote: "Carpal tunnel had me in constant pain. The Vitality Wand targets my wrists perfectly. After a month, I'm knitting again. I made sweaters for all my grandkids.", rating: 5, product: "Vitality Wand" },
  { name: "Harold G.", age: 80, location: "Palm Springs, CA", condition: "General wellness", quote: "At 80, I decided to try this 'miracle device' my neighbor wouldn't stop talking about. She was right. I feel 10 years younger. I'm out golfing three times a week.", rating: 5, product: "Tera-P90" },
  { name: "Martha V.", age: 67, location: "Chicago, IL", condition: "Fibromyalgia", quote: "Fibromyalgia made every day a battle. The Tera-P90+ bundle changed my life. The full-body treatment combined with the massager... I can function again.", rating: 5, product: "Tera-P90+" },
  { name: "Donald F.", age: 73, location: "Raleigh, NC", condition: "Plantar fasciitis", quote: "I couldn't walk to my mailbox without pain. Plantar fasciitis ruined my retirement plans. Two months with OlyLife and I'm hiking again. Actually hiking!", rating: 5, product: "Tera-P90" },
  { name: "Nancy S.", age: 70, location: "Honolulu, HI", condition: "Inflammation", quote: "My inflammation markers were through the roof. I started using the Tera-P90 daily. My next blood work shocked my doctor — inflammation cut in half.", rating: 5, product: "Tera-P90" },
  { name: "Kenneth W.", age: 75, location: "Sacramento, CA", condition: "Muscle cramps", quote: "Terrible leg cramps would wake me up screaming at 2 AM. Since OlyLife, I haven't had a single cramp in three months. Three months! I sleep peacefully now.", rating: 5, product: "Tera-P90" },
  { name: "Carol H.", age: 68, location: "Boise, ID", condition: "Headaches", quote: "I was getting migraines 3-4 times a week. The Tera-P90 brought that down to maybe once a month. I've gotten my life back. No more dark rooms and ice packs.", rating: 5, product: "Tera-P90" },
  { name: "Raymond T.", age: 72, location: "San Antonio, TX", condition: "Post-surgery recovery", quote: "After my knee replacement, recovery was brutal. My physical therapist was amazed at how fast I healed once I started using the Tera-P90. Weeks ahead of schedule.", rating: 5, product: "Tera-P90" },
  { name: "Betty L.", age: 79, location: "St. Petersburg, FL", condition: "Bone health", quote: "My osteoporosis diagnosis terrified me. I started using OlyLife alongside my treatment plan. My bone density scan improved for the first time in years.", rating: 5, product: "Tera-P90+" },
  { name: "Paul C.", age: 71, location: "Minneapolis, MN", condition: "Cold extremities", quote: "Living in Minnesota with poor circulation was torture. My fingers and toes were always ice cold. The Tera-P90 improved my circulation in ways I didn't think possible.", rating: 5, product: "Tera-P90" },
  { name: "Shirley M.", age: 74, location: "Sedona, AZ", condition: "Emotional wellness", quote: "I was in a dark place after losing my husband. The Tera-P90 sessions became my healing ritual. The calm, the clarity... it helped me find peace again.", rating: 5, product: "Tera-P90" },
  { name: "Edward K.", age: 76, location: "Orlando, FL", condition: "Tennis elbow", quote: "Tennis elbow ended my 30-year tennis career. Or so I thought. The Vitality Wand brought my elbow back to life. I played doubles last Saturday. I won.", rating: 5, product: "Vitality Wand" },
  { name: "Doris P.", age: 70, location: "Savannah, GA", condition: "Sciatica", quote: "Sciatica made sitting, standing, and lying down all painful. There was no comfortable position. After 6 weeks of Tera-P90 sessions, I sit in my rocking chair pain-free.", rating: 5, product: "Tera-P90" },
  { name: "Ronald W.", age: 73, location: "Spokane, WA", condition: "COPD support", quote: "My breathing was getting worse every year. The air purifier combined with the Tera-P90 treatments... I'm breathing easier. My oxygen levels have actually improved.", rating: 5, product: "Tera-P90" },
  { name: "Janet R.", age: 67, location: "Asheville, NC", condition: "Weight management", quote: "I never expected a therapy device to help with weight, but improved sleep and less pain meant I could exercise again. I've lost 15 pounds in 3 months.", rating: 5, product: "Tera-P90+" },
  { name: "Walter S.", age: 78, location: "Clearwater, FL", condition: "Restless legs", quote: "Restless leg syndrome made nights unbearable. My wife was ready to sleep in another room. After two weeks with OlyLife, my legs are calm. We both sleep now.", rating: 5, product: "Tera-P90" },
  { name: "Evelyn D.", age: 71, location: "Reno, NV", condition: "Digestive issues", quote: "My stomach issues were constant. Bloating, discomfort after every meal. Using the Tera-P90 on my abdomen area brought relief I never found from any medication.", rating: 5, product: "Tera-P90" },
  { name: "Arthur J.", age: 74, location: "Lexington, KY", condition: "Neuropathy", quote: "Diabetic neuropathy left my feet numb and burning. The Tera-P90 sessions brought feeling back to my toes for the first time in 5 years. I cried when I felt the carpet.", rating: 5, product: "Tera-P90" },
  { name: "Marie G.", age: 69, location: "Santa Fe, NM", condition: "Skin healing", quote: "A stubborn wound on my leg wouldn't heal for months. My doctor was considering a specialist. I started using the Tera-P90 on the area and it healed in 3 weeks.", rating: 5, product: "Tera-P90" },
  { name: "Howard N.", age: 77, location: "Myrtle Beach, SC", condition: "Balance issues", quote: "I was falling frequently and scared to walk alone. After a month of daily OlyLife sessions, my balance improved dramatically. I feel steady on my feet again.", rating: 5, product: "Tera-P90" },
  { name: "Judith B.", age: 72, location: "Tempe, AZ", condition: "Morning stiffness", quote: "It used to take me 45 minutes of stretching just to function in the morning. Now I hop out of bed in 5 minutes. I do a Tera-P90 session every evening before bed.", rating: 5, product: "Tera-P90" },
  { name: "Carl M.", age: 70, location: "Fort Worth, TX", condition: "Stress relief", quote: "Retirement stress is real — nobody tells you that. The Tera-P90 became my daily decompression session. 30 minutes and I feel like I just had a week of vacation.", rating: 5, product: "Tera-P90" },
  { name: "Gladys F.", age: 75, location: "Naples, FL", condition: "Eye floaters", quote: "Those annoying eye floaters were driving me crazy for years. The Galaxy G-One eye massager, combined with the Tera-P90, reduced them significantly. I can see clearly again.", rating: 5, product: "Galaxy G-One" },
  { name: "Lawrence R.", age: 73, location: "Eugene, OR", condition: "Shoulder impingement", quote: "A torn rotator cuff that 'healed' still gave me constant pain. Physical therapy helped some. The Vitality Wand finished the job. Full range of motion restored.", rating: 5, product: "Vitality Wand" },
  { name: "Rose T.", age: 76, location: "Mobile, AL", condition: "Immune support", quote: "I used to catch every cold that went around. Since using OlyLife daily, I haven't been sick in 8 months. My immune system finally feels strong.", rating: 5, product: "Tera-P90" },
  { name: "Gerald A.", age: 71, location: "Colorado Springs, CO", condition: "High blood pressure", quote: "My blood pressure was always borderline high despite medication. After adding OlyLife to my routine, my numbers stabilized. My cardiologist asked what changed.", rating: 5, product: "Tera-P90" },
  { name: "Alma H.", age: 78, location: "Pensacola, FL", condition: "Chronic fatigue", quote: "I thought being tired was just part of aging. The Tera-P90 proved me wrong. I have energy I haven't felt in 20 years. I'm volunteering at the shelter again.", rating: 5, product: "Tera-P90+" },
  { name: "Stanley V.", age: 74, location: "Fresno, CA", condition: "Hand tremors", quote: "My hand tremors were getting worse. I could barely hold a cup of coffee. After 6 weeks of daily Tera-P90 sessions, the tremors reduced by about 70%.", rating: 5, product: "Tera-P90" },
  { name: "Phyllis W.", age: 72, location: "Tulsa, OK", condition: "Vertigo", quote: "Vertigo episodes were terrifying and unpredictable. Since I started OlyLife therapy, I've had maybe two mild episodes in four months. Before, it was weekly.", rating: 5, product: "Tera-P90" },
  { name: "Vernon C.", age: 75, location: "Richmond, VA", condition: "Ankle pain", quote: "An old basketball injury left my ankle aching for 30 years. The Vitality Wand applied directly to the joint... the relief was incredible. Like turning back the clock.", rating: 5, product: "Vitality Wand" },
  { name: "Mildred E.", age: 80, location: "Sioux Falls, SD", condition: "Overall vitality", quote: "I bought this for my 80th birthday. Best gift I ever gave myself. My children say I look 10 years younger and act 20 years younger. I feel ALIVE again.", rating: 5, product: "Tera-P90+" },
  { name: "Clifford L.", age: 69, location: "Chattanooga, TN", condition: "Knee replacement recovery", quote: "My second knee replacement recovery was dramatically better than my first — the only difference was OlyLife. My surgeon noticed and asked about it.", rating: 5, product: "Tera-P90" },
  { name: "Lorraine S.", age: 73, location: "Palm Beach, FL", condition: "Facial rejuvenation", quote: "The Frost Age Beauty Device in the P90+ bundle is magical. My skin looks tighter, brighter, more alive. My friends keep asking what 'work' I've had done.", rating: 5, product: "Tera-P90+" },
  { name: "Norman D.", age: 76, location: "Knoxville, TN", condition: "Hip replacement prep", quote: "My doctor said I needed a hip replacement. I used the Tera-P90 for 3 months while I waited. The pain reduced so much, my doctor postponed the surgery.", rating: 5, product: "Tera-P90" },
  { name: "Elaine B.", age: 70, location: "Madison, WI", condition: "Anxiety", quote: "Anxiety was ruining my golden years. The Tera-P90 sessions calm my nervous system like nothing else. I feel centered, peaceful. My family sees the difference.", rating: 5, product: "Tera-P90" },
  { name: "Roger K.", age: 77, location: "Little Rock, AR", condition: "Sinus issues", quote: "Chronic sinus congestion for decades. The terahertz frequency therapy opened up my airways in ways no medication ever did. I breathe freely for the first time.", rating: 5, product: "Tera-P90" },
  { name: "Lucille P.", age: 74, location: "Wilmington, DE", condition: "Carpal tunnel", quote: "Carpal tunnel surgery was scheduled. I tried OlyLife as a last resort. Six weeks later, I cancelled the surgery. My wrists feel normal again.", rating: 5, product: "Vitality Wand" },
  { name: "Chester G.", age: 79, location: "Sun City, AZ", condition: "Prostate health", quote: "Prostate issues were affecting my quality of life enormously. The Tera-P90 sessions made a noticeable difference within the first month. I feel like a younger man.", rating: 5, product: "Tera-P90" },
  { name: "Agnes M.", age: 71, location: "Hilton Head, SC", condition: "Lymphatic drainage", quote: "My legs were always swollen. The Tera-P90 improved my lymphatic drainage visibly. My ankles are normal sized for the first time in years. I can wear my shoes again.", rating: 5, product: "Tera-P90" },
  { name: "Harvey R.", age: 73, location: "Prescott, AZ", condition: "Tinnitus", quote: "The ringing in my ears was driving me insane. It's not completely gone, but OlyLife reduced it by about 60%. For the first time in years, I can enjoy silence.", rating: 5, product: "Tera-P90" },
  { name: "Frances T.", age: 68, location: "Hilton Head, SC", condition: "Skin conditions", quote: "Eczema covered my arms and hands for years. The combination of improved circulation and cellular therapy from OlyLife cleared it up dramatically.", rating: 5, product: "Tera-P90" },
  { name: "Albert N.", age: 75, location: "Scottsdale, AZ", condition: "Energy & vitality", quote: "My wife bought two Tera-P90s — one for each of us. We do our sessions together every evening. We're both sleeping better, moving better, and enjoying life more than ever.", rating: 5, product: "Tera-P90" },
  { name: "Bernice H.", age: 77, location: "The Villages, FL", condition: "Bone density", quote: "My DEXA scan showed my bone density improving for the first time since menopause. The only thing I added to my routine was OlyLife. My doctor is thrilled.", rating: 5, product: "Tera-P90+" },
  { name: "Leonard J.", age: 72, location: "Branson, MO", condition: "Wound healing", quote: "A diabetic wound on my foot wouldn't heal for 4 months. Started OlyLife sessions focusing on the area. In three weeks, the wound closed. My podiatrist called it remarkable.", rating: 5, product: "Tera-P90" },
  { name: "Vivian C.", age: 69, location: "Sedona, AZ", condition: "Mental fog", quote: "Brain fog was stealing my sharp mind. I couldn't remember names, dates, or where I put things. After a month of daily OlyLife sessions, my mental clarity is back.", rating: 5, product: "Tera-P90" },
  { name: "Oscar W.", age: 74, location: "Fort Myers, FL", condition: "Gout", quote: "Gout flare-ups were crippling me every few weeks. Since using the Tera-P90 consistently, I've gone 4 months without a single flare. Not one. That's a record for me.", rating: 5, product: "Tera-P90" },
  { name: "Hazel F.", age: 76, location: "Laguna Beach, CA", condition: "Collagen & skin", quote: "At 76, I wasn't expecting skincare miracles. But the Frost Age device tightened my jawline noticeably. My daughter borrowed it and now she wants her own.", rating: 5, product: "Tera-P90+" },
  { name: "Clarence D.", age: 78, location: "Destin, FL", condition: "Overall health", quote: "I bought OlyLife because I'm tired of pills. I take 8 medications daily. After 3 months, my doctor reduced two of them. That's the kind of result that matters.", rating: 5, product: "Tera-P90" },
  { name: "Irene S.", age: 73, location: "Branson, MO", condition: "Depression", quote: "Nothing felt joyful anymore. I was going through the motions. The Tera-P90 lifted something in me. I paint again. I garden. I laugh. I feel human again.", rating: 5, product: "Tera-P90" },
  { name: "Ralph E.", age: 71, location: "Mesa, AZ", condition: "Chronic inflammation", quote: "My CRP levels were dangerously high. After 8 weeks of consistent OlyLife therapy, my inflammation markers dropped by 45%. My rheumatologist was genuinely impressed.", rating: 5, product: "Tera-P90" },
  { name: "Edna R.", age: 79, location: "Savannah, GA", condition: "Mobility", quote: "I went from using a walker to walking independently in two months. My physical therapist credits the combination of PT and OlyLife. I credit the device.", rating: 5, product: "Tera-P90+" },
  { name: "Russell M.", age: 70, location: "Bend, OR", condition: "Sleep apnea", quote: "My sleep apnea was severe. OlyLife didn't replace my CPAP, but it improved my overall sleep quality so much that I actually feel rested for the first time in years.", rating: 5, product: "Tera-P90" },
  { name: "Thelma K.", age: 75, location: "Key West, FL", condition: "Swelling", quote: "After my mastectomy, lymphedema in my arm was constant. OlyLife treatments reduced the swelling noticeably. I can wear my watch again. Small thing, huge victory.", rating: 5, product: "Tera-P90" },
  { name: "Wallace B.", age: 72, location: "Lake Tahoe, CA", condition: "Recovery", quote: "I'm an active 72-year-old — skiing, hiking, biking. OlyLife cut my recovery time in half. I'm not sore for days anymore. One session and I'm ready to go again.", rating: 5, product: "Tera-P90" },
  { name: "Pearl G.", age: 81, location: "Naples, FL", condition: "Longevity", quote: "My secret to being 81 and feeling 60? OlyLife, walking, and gratitude. This device is the best investment I've ever made in my health. I tell everyone about it.", rating: 5, product: "Tera-P90+" },
  { name: "Eugene A.", age: 74, location: "Tucson, AZ", condition: "Spinal stenosis", quote: "Spinal stenosis had me considering surgery. My neighbor lent me his Tera-P90 for a week. I bought my own the next day. The pain relief is that immediate.", rating: 5, product: "Tera-P90" },
  { name: "Beatrice L.", age: 70, location: "Charleston, SC", condition: "Hormonal balance", quote: "Hot flashes, mood swings, insomnia — menopause hit me hard even into my 70s. The Tera-P90 calmed everything down. My husband says I'm easier to live with now.", rating: 5, product: "Tera-P90" },
  { name: "Floyd N.", age: 76, location: "Scottsdale, AZ", condition: "Frozen shoulder", quote: "Frozen shoulder for 18 months. Three cortisone shots did nothing. One month of daily Tera-P90 sessions and Vitality Wand work — full range of motion is back.", rating: 5, product: "Tera-P90" },
  { name: "Lois C.", age: 72, location: "Sarasota, FL", condition: "Chronic pain", quote: "I was on pain medication for 12 years. Strong stuff. After 4 months of OlyLife, I'm down to over-the-counter Tylenol occasionally. My pain doctor is supportive of continuing.", rating: 5, product: "Tera-P90+" },
  { name: "Henry T.", age: 77, location: "Palm Desert, CA", condition: "Cognitive function", quote: "My memory was slipping and it scared me. After consistent Tera-P90 use, my mental sharpness returned. I beat my son at chess last week for the first time in years.", rating: 5, product: "Tera-P90" },
  { name: "Lillian W.", age: 74, location: "Clearwater, FL", condition: "Allergies", quote: "Seasonal allergies made spring miserable every year. The air purifier with the Tera-P90 therapy... this was my first allergy-free spring in 20 years.", rating: 5, product: "A9 BamaAir" },
  { name: "Samuel P.", age: 73, location: "Phoenix, AZ", condition: "Tendinitis", quote: "Achilles tendinitis ended my daily walks. The Vitality Wand on the tendon, plus Tera-P90 full body sessions — I'm back to 10,000 steps a day. Every day.", rating: 5, product: "Vitality Wand" },
  { name: "Mabel D.", age: 80, location: "The Villages, FL", condition: "Quality of life", quote: "I'm 80 and I dance. I swim. I travel. People ask my secret and I show them my Tera-P90. This little device gave me a second life. I'm not exaggerating.", rating: 5, product: "Tera-P90" },
  { name: "Victor H.", age: 69, location: "Scottsdale, AZ", condition: "Muscle tension", quote: "Decades of stress stored in my neck and shoulders. The Tera-P90+ bundle with the massager released tension I didn't even know I was carrying. I stand taller now.", rating: 5, product: "Tera-P90+" },
  { name: "Louise R.", age: 75, location: "Jupiter, FL", condition: "Wellness routine", quote: "OlyLife isn't just a device — it's my daily wellness ritual. 30 minutes every morning with my coffee. I'm healthier, happier, and more at peace than I've been in decades.", rating: 5, product: "Tera-P90" },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 min-w-[320px] max-w-[380px] flex-shrink-0 mx-3">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={14} className="text-gold fill-gold" />
        ))}
      </div>

      <div className="relative mb-4">
        <Quote size={20} className="text-emerald/20 absolute -top-1 -left-1" />
        <p className="text-charcoal/70 text-sm leading-relaxed pl-5 line-clamp-4">
          {testimonial.quote}
        </p>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-50">
        <div>
          <p className="font-semibold text-charcoal text-sm">
            {testimonial.name}
          </p>
          <p className="text-xs text-charcoal/40">
            Age {testimonial.age} &middot; {testimonial.location}
          </p>
        </div>
        <div className="text-right">
          <span className="text-xs bg-emerald/10 text-emerald px-2 py-1 rounded-full font-medium">
            {testimonial.product}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Split testimonials into rows for infinite scroll effect
  const row1 = testimonials.slice(0, 26);
  const row2 = testimonials.slice(26, 52);
  const row3 = testimonials.slice(52);

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-cream overflow-hidden"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-emerald text-sm font-semibold tracking-widest uppercase">
            Real People. Real Results.
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mt-4 mb-6">
            Life-Changing
            <br />
            <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg text-charcoal/60 max-w-2xl mx-auto">
            Don&apos;t take our word for it. Hear from the thousands of people
            whose lives have been transformed by OlyLife technology.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12 mt-10">
            <div>
              <p className="text-4xl font-bold gradient-text">50,000+</p>
              <p className="text-sm text-charcoal/50 mt-1">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text">4.9/5</p>
              <p className="text-sm text-charcoal/50 mt-1">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text">97%</p>
              <p className="text-sm text-charcoal/50 mt-1">
                Would Recommend
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scrolling rows */}
      <div className="space-y-6">
        {/* Row 1 - scroll left */}
        <div className="flex animate-scroll-left" style={{ width: "max-content" }}>
          {[...row1, ...row1].map((t, i) => (
            <TestimonialCard key={`r1-${i}`} testimonial={t} />
          ))}
        </div>

        {/* Row 2 - scroll right */}
        <div className="flex animate-scroll-right" style={{ width: "max-content" }}>
          {[...row2, ...row2].map((t, i) => (
            <TestimonialCard key={`r2-${i}`} testimonial={t} />
          ))}
        </div>

        {/* Row 3 - scroll left (slower) */}
        <div
          className="flex animate-scroll-left"
          style={{ width: "max-content", animationDuration: "80s" }}
        >
          {[...row3, ...row3].map((t, i) => (
            <TestimonialCard key={`r3-${i}`} testimonial={t} />
          ))}
        </div>
      </div>

      {/* FDA Disclaimer */}
      <div className="max-w-4xl mx-auto px-6 mt-16 text-center">
        <p className="text-xs text-charcoal/30 leading-relaxed">
          *Individual results may vary. These statements have not been evaluated
          by the FDA. This product is not intended to diagnose, treat, cure, or
          prevent any disease. Testimonials reflect personal experiences and are
          not guaranteed outcomes.
        </p>
      </div>
    </section>
  );
}
