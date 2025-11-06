// lib/translations.ts

export interface ServicePoint {
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: {
    introduction: string;
    points: ServicePoint[];
  };
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  expertise: string[];
}

export interface Translations {
  header: {
    clinicName: string;
    nav: {
      home: string;
      about: string;
      services: string;
      team: string;
      careers: string;
      blog: string;
      healthTips: string;
      contact: string;
    };
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  team: {
    title: string;
    subtitle: string;
    members: TeamMember[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      sending: string;
      successTitle: string;
      successMessage: string;
    };
    info: {
        address: string;
        addressValue: string;
        phone: string;
        email: string;
    }
  };
  footer: {
    about: string;
    quickLinks: string;
    contact: string;
    location: string;
    rights: string;
  };
  careers: {
      title: string;
      subtitle: string;
      whyJoin: string;
      reasons: { title: string; description: string; }[];
      openings: string;
      jobs: { title: string; description: string; }[];
      location: string;
      apply: string;
  };
  blog: {
    title: string;
    subtitle: string;
    posts: { title: string; excerpt: string; }[];
    authors: string[];
    dates: string[];
  };
  healthTips: {
      title: string;
      subtitle: string;
      tips: { date: string; title: string; summary: string; }[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: {
        name: string;
        location: string;
        rating: number;
        quote: string;
    }[];
  };
  philosophy: {
    title: string;
    subtitle: string;
    points: { title: string; description: string; }[];
  };
  trustBar: {
    title: string;
  };
  smileGallery: {
    title: string;
    subtitle: string;
    items: { case: string; description: string; }[];
    after: string;
    before: string;
  };
  ui: {
    readMore: string;
    viewBio: string;
    close: string;
    expertise: string;
    backToServices: string;
  };
}

const en: Translations = {
  header: {
    clinicName: 'Horizon Medical Center',
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      team: 'Our Team',
      careers: 'Careers',
      blog: 'Blog',
      healthTips: 'Health Tips',
      contact: 'Contact Us',
    },
  },
  hero: {
    title: 'Advanced Care, Personalized Touch',
    subtitle: 'Your journey to a healthier, brighter smile starts here. We combine state-of-the-art technology with compassionate care.',
    cta: 'Book an Appointment',
  },
  about: {
    title: 'Welcome to Horizon Medical Center',
    p1: 'Founded with a vision to provide exceptional dental care, Horizon Medical Center has been serving the community for over a decade. Our clinic is equipped with the latest technology to ensure you receive the best treatment possible in a comfortable and welcoming environment.',
    p2: 'Our team of dedicated professionals is committed to your oral health, offering a comprehensive range of services from routine check-ups to advanced cosmetic procedures. We believe in building lasting relationships with our patients based on trust and transparency.',
  },
  services: {
    title: 'Our Services',
    subtitle: 'We offer a wide range of dental services to meet all your needs. Our team is dedicated to providing you with the highest quality care.',
    items: [
      {
        id: 'general-dentistry',
        title: 'General Dentistry',
        description: 'Comprehensive care for your everyday dental needs, from cleanings to fillings.',
        details: {
          introduction: 'Our general dentistry services are the foundation of your oral health, focusing on prevention, diagnosis, and treatment of common dental issues.',
          points: [
            { title: 'Routine Check-ups & Cleanings', description: 'Regular visits to maintain healthy teeth and gums, preventing future problems.' },
            { title: 'Fillings & Restorations', description: 'Repairing cavities and damage with modern, tooth-colored materials.' },
            { title: 'Root Canal Therapy', description: 'Saving infected teeth from extraction with advanced, painless procedures.' },
          ]
        }
      },
      {
        id: 'cosmetic-dentistry',
        title: 'Cosmetic Dentistry',
        description: 'Transform your smile with our aesthetic treatments, including whitening and veneers.',
        details: {
          introduction: 'Achieve the smile of your dreams with our range of cosmetic treatments, designed to enhance the beauty of your natural teeth.',
          points: [
            { title: 'Teeth Whitening', description: 'Brighten your smile safely and effectively with our professional whitening solutions.' },
            { title: 'Porcelain Veneers', description: 'Custom-made shells to cover the front surface of teeth to improve their appearance.' },
            { title: 'Invisalign® Clear Aligners', description: 'Straighten your teeth discreetly without traditional metal braces.' },
          ]
        }
      },
      {
        id: 'orthodontics',
        title: 'Orthodontics',
        description: 'Straighten your teeth and correct your bite with modern orthodontic solutions.',
        details: {
            introduction: "Achieve a perfectly aligned smile and improve your oral health with our orthodontic treatments for all ages.",
            points: [
                { title: "Traditional Braces", description: "Time-tested and effective, metal braces can correct a wide range of orthodontic issues." },
                { title: "Clear Aligners", description: "A discreet and convenient alternative to braces for straightening your teeth." },
                { title: "Retainers", description: "Custom-made devices to maintain your new smile after orthodontic treatment." },
            ]
        }
      },
      {
        id: 'dental-implants',
        title: 'Dental Implants',
        description: 'A permanent and natural-looking solution for replacing missing teeth.',
        details: {
            introduction: "Restore the function and appearance of your smile with dental implants, the gold standard for tooth replacement.",
            points: [
                { title: "Single Tooth Implants", description: "Replace a single missing tooth without affecting neighboring teeth." },
                { title: "Implant-Supported Bridges", description: "An excellent solution for replacing several missing teeth in a row." },
                { title: "All-on-4® Treatment", description: "A revolutionary full-arch restoration using just four strategically placed implants." },
            ]
        }
      },
      {
        id: 'pediatric-dentistry',
        title: 'Pediatric Dentistry',
        description: 'Gentle and friendly dental care for your little ones to ensure a lifetime of healthy smiles.',
        details: {
            introduction: "We provide a positive and fun dental experience for children, focusing on prevention and education.",
            points: [
                { title: "First Dental Visit", description: "Creating a comfortable and positive introduction to dental care for your child." },
                { title: "Dental Sealants", description: "A protective coating applied to the chewing surfaces of back teeth to prevent decay." },
                { title: "Fluoride Treatments", description: "Strengthening tooth enamel to make it more resistant to cavities." },
            ]
        }
      },
      {
        id: 'emergency-services',
        title: 'Emergency Services',
        description: 'Prompt and compassionate care for dental emergencies when you need it most.',
        details: {
            introduction: "We are here to help you with urgent dental problems, providing swift and effective treatment to relieve pain.",
            points: [
                { title: "Toothache Relief", description: "Diagnosing and treating the cause of severe tooth pain." },
                { title: "Chipped or Broken Teeth", description: "Restoring the structure and appearance of damaged teeth." },
                { title: "Knocked-Out Tooth", description: "Immediate care to increase the chances of saving a knocked-out permanent tooth." },
            ]
        }
      },
    ],
  },
  team: {
    title: 'Meet Our Expert Team',
    subtitle: 'Our skilled and compassionate professionals are the heart of our clinic, dedicated to providing you with exceptional care.',
    members: [
      { name: 'Dr. Evelyn Reed', title: 'Lead Dentist, DDS', bio: 'With over 15 years of experience, Dr. Reed is passionate about cosmetic and restorative dentistry. She is known for her meticulous attention to detail and her warm, caring approach.', expertise: ['Veneers', 'Crowns & Bridges', 'Smile Makeovers'] },
      { name: 'Dr. Marcus Thorne', title: 'Orthodontist', bio: 'Dr. Thorne specializes in creating perfectly aligned smiles for patients of all ages. He stays at the forefront of orthodontic technology to offer the most efficient and comfortable treatments.', expertise: ['Invisalign®', 'Traditional Braces', 'Surgical Orthodontics'] },
      { name: 'Dr. Aisha Khan', title: 'Pediatric Dentist', bio: 'Dr. Khan has a special gift for making children feel comfortable and happy at the dentist. Her focus is on preventative care and education to build a foundation for a lifetime of healthy smiles.', expertise: ['Pediatric Care', 'Dental Sealants', 'Early Orthodontic Intervention'] },
      { name: 'Dr. Samuel Chen', title: 'Implant Specialist', bio: 'Dr. Chen is a leading expert in dental implantology. He uses cutting-edge techniques to restore smiles, ensuring results that are both functional and aesthetically pleasing.', expertise: ['Dental Implants', 'Bone Grafting', 'All-on-4®'] },
    ],
  },
  contact: {
    title: 'Get In Touch',
    subtitle: 'We are here to answer your questions or schedule your next appointment. Reach out to us today!',
    form: {
      name: 'Your Name',
      email: 'Your Email',
      subject: 'Subject',
      message: 'Your Message',
      send: 'Send Message',
      sending: 'Sending...',
      successTitle: 'Message Sent!',
      successMessage: 'Thank you for contacting us. We will get back to you shortly.',
    },
    info: {
        address: 'Our Address',
        addressValue: '123 Smile Street, Muscat, Sultanate of Oman',
        phone: 'Phone',
        email: 'Email',
    }
  },
  footer: {
    about: 'Horizon Medical Center is committed to providing top-tier dental care in a modern and friendly environment. Your health and smile are our top priorities.',
    quickLinks: 'Quick Links',
    contact: 'Contact Us',
    location: '123 Smile Street, Muscat',
    rights: 'All Rights Reserved.',
  },
  careers: {
      title: 'Join Our Team',
      subtitle: 'We are always looking for passionate and talented individuals to join the Horizon family. Explore our open positions and start your journey with us.',
      whyJoin: 'Why Join Horizon Medical Center?',
      reasons: [
          { title: 'Professional Growth', description: 'We invest in our team members with continuous training and development opportunities.' },
          { title: 'State-of-the-Art Facility', description: 'Work with the latest dental technology in a modern and collaborative environment.' },
          { title: 'Patient-Centered Culture', description: 'Be part of a team that is genuinely committed to making a difference in patients\' lives.' },
          { title: 'Competitive Benefits', description: 'We offer a comprehensive benefits package, including health insurance and paid time off.' },
      ],
      openings: 'Current Openings',
      jobs: [
          { title: 'Dental Hygienist', description: 'Seeking a licensed dental hygienist with a passion for patient education and preventative care. 2+ years of experience preferred.' },
          { title: 'Dental Assistant', description: 'A great opportunity for a certified dental assistant to support our dentists in providing excellent patient care. Must be a team player.' },
      ],
      location: 'Muscat, Oman',
      apply: 'Apply Now',
  },
  blog: {
    title: 'From Our Blog',
    subtitle: 'Stay informed with the latest news, tips, and insights in dental health from our team of experts.',
    posts: [
        { title: 'The Surprising Benefits of Flossing Daily', excerpt: 'Discover how this simple habit can dramatically improve not just your oral health, but your overall well-being.' },
        { title: 'Choosing the Right Toothbrush for You', excerpt: 'Manual or electric? Soft or medium bristles? We break down the options to help you make the best choice.' },
        { title: 'Understanding Teeth Whitening: Myths vs. Facts', excerpt: 'Learn what really works when it comes to achieving a brighter smile and what common myths to avoid.' },
    ],
    authors: ['By Dr. Evelyn Reed', 'By Dr. Marcus Thorne', 'By Dr. Aisha Khan'],
    dates: ['June 15, 2024', 'June 10, 2024', 'June 5, 2024'],
  },
  healthTips: {
      title: 'Health Tips & Updates',
      subtitle: 'Your source for reliable dental health information and clinic news.',
      tips: [
          { date: 'July 1, 2024', title: 'Summer Oral Health Tips', summary: 'The summer season brings fun, sun, and special considerations for your teeth. Learn how to protect your smile during your vacation, from staying hydrated to being mindful of sugary summer treats. We cover tips for dealing with sensitivity to cold drinks and more.' },
          { date: 'June 20, 2024', title: 'The Link Between Oral Health and Heart Disease', summary: 'Recent studies continue to highlight the critical connection between the health of your gums and your cardiovascular system. Understand the risks of gum disease and how maintaining good oral hygiene can contribute to a healthier heart.' },
          { date: 'June 5, 2024', title: 'Welcoming Dr. Samuel Chen', summary: 'We are thrilled to announce that Dr. Samuel Chen, a renowned implant specialist, has joined the Horizon Medical Center team. Dr. Chen brings a wealth of experience and expertise in advanced dental implantology and full-mouth reconstruction.' },
      ],
  },
  testimonials: {
    title: 'What Our Patients Say',
    subtitle: 'We are proud of the relationships we build and the smiles we create. See what our patients have to say about their experience.',
    items: [
      { name: 'Sarah L.', location: 'Muscat, Oman', rating: 5, quote: 'The best dental experience I have ever had! The entire team is professional, friendly, and truly cares about their patients. I couldn\'t be happier with my new smile.' },
      { name: 'Ahmed Al-Farsi', location: 'Seeb, Oman', rating: 5, quote: 'Dr. Thorne and his team were amazing throughout my Invisalign treatment. They explained everything clearly and the results are fantastic. Highly recommended!' },
      { name: 'Fatima K.', location: 'Bawshar, Oman', rating: 5, quote: 'I was so nervous about getting a dental implant, but Dr. Chen made the process completely painless and comfortable. The facility is top-notch. Thank you, Horizon Clinic!' },
    ],
  },
  philosophy: {
    title: 'Our Philosophy',
    subtitle: 'Our core values guide every aspect of our practice, ensuring you receive the best care possible.',
    points: [
      { title: 'Patient-Centered Care', description: 'Your needs, comfort, and goals are at the forefront of everything we do. We listen to you and create personalized treatment plans.' },
      { title: 'Commitment to Excellence', description: 'We pursue the highest standards of clinical and personal excellence through continuous learning and state-of-the-art technology.' },
      { title: 'Integrity & Compassion', description: 'We treat every patient with respect, honesty, and empathy, building relationships based on trust and creating a positive, supportive environment.' },
    ],
  },
  trustBar: {
    title: 'Trusted by the Community & Recognized by the Industry',
  },
  smileGallery: {
    title: 'Smile Gallery',
    subtitle: 'See the life-changing results we have achieved for our patients. Your beautiful new smile is waiting.',
    items: [
        { case: 'Veneers', description: 'Complete smile makeover using porcelain veneers to correct color, shape, and alignment.' },
        { case: 'Invisalign', description: 'Teeth straightening with clear aligners, closing gaps and correcting bite.' },
        { case: 'Dental Implants', description: 'Replacement of missing front teeth with durable and natural-looking implants.' },
    ],
    after: 'After',
    before: 'Before',
  },
  ui: {
    readMore: 'Read More',
    viewBio: 'View Bio',
    close: 'Close',
    expertise: 'Areas of Expertise',
    backToServices: 'Back to Services',
  },
};

const ar: Translations = {
  header: {
    clinicName: 'مركز الأفق الطبي',
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      team: 'فريقنا',
      careers: 'وظائف',
      blog: 'المدونة',
      healthTips: 'نصائح صحية',
      contact: 'اتصل بنا',
    },
  },
  hero: {
    title: 'عناية متقدمة، لمسة شخصية',
    subtitle: 'رحلتك نحو ابتسامة أكثر صحة وإشراقًا تبدأ هنا. نحن نجمع بين أحدث التقنيات والرعاية الرحيمة.',
    cta: 'احجز موعدًا',
  },
  about: {
    title: 'أهلاً بكم في مركز الأفق الطبي',
    p1: 'تأسس مركز الأفق الطبي برؤية لتقديم رعاية أسنان استثنائية، وهو يخدم المجتمع لأكثر من عقد. عيادتنا مجهزة بأحدث التقنيات لضمان حصولك على أفضل علاج ممكن في بيئة مريحة ومرحبة.',
    p2: 'يلتزم فريقنا من المهنيين المتفانين بصحة فمك، ويقدم مجموعة شاملة من الخدمات بدءًا من الفحوصات الروتينية إلى الإجراءات التجميلية المتقدمة. نؤمن ببناء علاقات دائمة مع مرضانا على أساس الثقة والشفافية.',
  },
  services: {
    title: 'خدماتنا',
    subtitle: 'نحن نقدم مجموعة واسعة من خدمات طب الأسنان لتلبية جميع احتياجاتك. فريقنا مكرس لتزويدك بأعلى جودة من الرعاية.',
    items: [
      {
        id: 'general-dentistry',
        title: 'طب الأسنان العام',
        description: 'رعاية شاملة لاحتياجاتك اليومية من تنظيف وحشوات.',
        details: {
          introduction: 'خدمات طب الأسنان العام لدينا هي أساس صحة فمك، مع التركيز على الوقاية والتشخيص وعلاج مشاكل الأسنان الشائعة.',
          points: [
            { title: 'فحوصات وتنظيفات دورية', description: 'زيارات منتظمة للحفاظ على صحة الأسنان واللثة، ومنع المشاكل المستقبلية.' },
            { title: 'الحشوات والترميمات', description: 'إصلاح التسوس والأضرار بمواد حديثة بلون الأسنان.' },
            { title: 'علاج قناة الجذر', description: 'إنقاذ الأسنان المصابة من الخلع بإجراءات متقدمة وغير مؤلمة.' },
          ]
        }
      },
      {
        id: 'cosmetic-dentistry',
        title: 'طب الأسنان التجميلي',
        description: 'غير ابتسامتك بعلاجاتنا التجميلية، بما في ذلك التبييض والفينير.',
        details: {
          introduction: 'حقق ابتسامة أحلامك مع مجموعتنا من العلاجات التجميلية، المصممة لتعزيز جمال أسنانك الطبيعية.',
          points: [
            { title: 'تبييض الأسنان', description: 'اجعل ابتسامتك أكثر إشراقًا بأمان وفعالية مع حلول التبييض الاحترافية لدينا.' },
            { title: 'قشور البورسلين (الفينير)', description: 'قشور مصنوعة خصيصًا لتغطية السطح الأمامي للأسنان لتحسين مظهرها.' },
            { title: 'تقويم الأسنان الشفاف Invisalign®', description: 'قم بتقويم أسنانك بسرية تامة بدون تقويم معدني تقليدي.' },
          ]
        }
      },
      {
        id: 'orthodontics',
        title: 'تقويم الأسنان',
        description: 'قم بتقويم أسنانك وتصحيح عضتك باستخدام حلول تقويم الأسنان الحديثة.',
        details: {
            introduction: "احصل على ابتسامة متناسقة تمامًا وحسن صحة فمك من خلال علاجات تقويم الأسنان لجميع الأعمار.",
            points: [
                { title: "التقويم التقليدي", description: "فعال ومجرب عبر الزمن، يمكن للتقويم المعدني تصحيح مجموعة واسعة من مشاكل تقويم الأسنان." },
                { title: "التقويم الشفاف", description: "بديل سري ومريح للتقويم التقليدي لتقويم أسنانك." },
                { title: "المثبتات", description: "أجهزة مصنوعة خصيصًا للحفاظ على ابتسامتك الجديدة بعد علاج تقويم الأسنان." },
            ]
        }
    },
    {
        id: 'dental-implants',
        title: 'زراعة الأسنان',
        description: 'حل دائم وطبيعي المظهر لتعويض الأسنان المفقودة.',
        details: {
            introduction: "استعد وظيفة ومظهر ابتسامتك مع زراعة الأسنان، المعيار الذهبي لتعويض الأسنان.",
            points: [
                { title: "زراعة سن واحد", description: "استبدل سنًا مفقودًا واحدًا دون التأثير على الأسنان المجاورة." },
                { title: "الجسور المدعومة بالزرعات", description: "حل ممتاز لتعويض عدة أسنان مفقودة على التوالي." },
                { title: "علاج All-on-4®", description: "ترميم كامل للفك باستخدام أربع زرعات فقط موضوعة بشكل استراتيجي." },
            ]
        }
    },
    {
        id: 'pediatric-dentistry',
        title: 'طب أسنان الأطفال',
        description: 'رعاية أسنان لطيفة وودودة لأطفالك لضمان ابتسامة صحية مدى الحياة.',
        details: {
            introduction: "نحن نقدم تجربة أسنان إيجابية وممتعة للأطفال، مع التركيز على الوقاية والتثقيف.",
            points: [
                { title: "الزيارة الأولى لطبيب الأسنان", description: "خلق مقدمة مريحة وإيجابية لرعاية الأسنان لطفلك." },
                { title: "الحشوات الواقية", description: "طبقة واقية توضع على أسطح المضغ للأسنان الخلفية لمنع التسوس." },
                { title: "علاجات الفلورايد", description: "تقوية مينا الأسنان لجعلها أكثر مقاومة للتسوس." },
            ]
        }
    },
    {
        id: 'emergency-services',
        title: 'خدمات الطوارئ',
        description: 'رعاية فورية ورحيمة لحالات طوارئ الأسنان عندما تكون في أمس الحاجة إليها.',
        details: {
            introduction: "نحن هنا لمساعدتك في مشاكل الأسنان العاجلة، وتقديم علاج سريع وفعال لتخفيف الألم.",
            points: [
                { title: "تخفيف آلام الأسنان", description: "تشخيص وعلاج سبب آلام الأسنان الشديدة." },
                { title: "الأسنان المكسورة أو المتشققة", description: "ترميم بنية ومظهر الأسنان التالفة." },
                { title: "الأسنان المخلوعة", description: "رعاية فورية لزيادة فرص إنقاذ السن الدائم المخلوع." },
            ]
        }
      },
    ],
  },
  team: {
    title: 'تعرف على فريق الخبراء لدينا',
    subtitle: 'إن المتخصصين المهرة والعطوفين لدينا هم قلب عيادتنا، وهم ملتزمون بتزويدك برعاية استثنائية.',
    members: [
      { name: 'د. إيفلين ريد', title: 'طبيبة أسنان رئيسية، DDS', bio: 'بخبرة تزيد عن 15 عامًا، تتمتع الدكتورة ريد بشغف بطب الأسنان التجميلي والترميمي. وهي معروفة باهتمامها الدقيق بالتفاصيل ونهجها الدافئ والمهتم.', expertise: ['الفينير', 'التيجان والجسور', 'تجميل الابتسامة'] },
      { name: 'د. ماركوس ثورن', title: 'أخصائي تقويم الأسنان', bio: 'يتخصص الدكتور ثورن في إنشاء ابتسامات متناسقة تمامًا للمرضى من جميع الأعمار. وهو يواكب أحدث تقنيات تقويم الأسنان لتقديم العلاجات الأكثر كفاءة وراحة.', expertise: ['Invisalign®', 'التقويم التقليدي', 'تقويم الأسنان الجراحي'] },
      { name: 'د. عائشة خان', title: 'طبيبة أسنان أطفال', bio: 'تتمتع الدكتورة خان بموهبة خاصة في جعل الأطفال يشعرون بالراحة والسعادة لدى طبيب الأسنان. ينصب تركيزها على الرعاية الوقائية والتثقيف لبناء أساس لابتسامة صحية مدى الحياة.', expertise: ['رعاية الأطفال', 'الحشوات الواقية', 'التدخل التقويمي المبكر'] },
      { name: 'د. صموئيل تشين', title: 'أخصائي زراعة الأسنان', bio: 'الدكتور تشين خبير رائد في زراعة الأسنان. يستخدم تقنيات متطورة لاستعادة الابتسامات، مما يضمن نتائج وظيفية وجمالية.', expertise: ['زراعة الأسنان', 'تطعيم العظام', 'All-on-4®'] },
    ],
  },
  contact: {
    title: 'ابقى على تواصل',
    subtitle: 'نحن هنا للإجابة على أسئلتك أو لتحديد موعدك القادم. تواصل معنا اليوم!',
    form: {
      name: 'اسمك',
      email: 'بريدك الإلكتروني',
      subject: 'الموضوع',
      message: 'رسالتك',
      send: 'إرسال الرسالة',
      sending: 'جارٍ الإرسال...',
      successTitle: 'تم إرسال الرسالة!',
      successMessage: 'شكرًا لتواصلك معنا. سنعود إليك قريبًا.',
    },
    info: {
        address: 'عنواننا',
        addressValue: '123 شارع الابتسامة، مسقط، سلطنة عمان',
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
    }
  },
  footer: {
    about: 'يلتزم مركز الأفق الطبي بتقديم رعاية أسنان عالية المستوى في بيئة حديثة وودودة. صحتك وابتسامتك هما أهم أولوياتنا.',
    quickLinks: 'روابط سريعة',
    contact: 'اتصل بنا',
    location: '123 شارع الابتسامة، مسقط',
    rights: 'جميع الحقوق محفوظة.',
  },
  careers: {
    title: 'انضم إلى فريقنا',
    subtitle: 'نحن نبحث دائمًا عن أفراد متحمسين وموهوبين للانضمام إلى عائلة الأفق. استكشف وظائفنا الشاغرة وابدأ رحلتك معنا.',
    whyJoin: 'لماذا تنضم إلى مركز الأفق الطبي؟',
    reasons: [
        { title: 'النمو المهني', description: 'نستثمر في أعضاء فريقنا من خلال فرص التدريب والتطوير المستمر.' },
        { title: 'منشأة حديثة', description: 'اعمل بأحدث تقنيات طب الأسنان في بيئة حديثة وتعاونية.' },
        { title: 'ثقافة تتمحور حول المريض', description: 'كن جزءًا من فريق ملتزم حقًا بإحداث فرق في حياة المرضى.' },
        { title: 'مزايا تنافسية', description: 'نقدم حزمة مزايا شاملة، بما في ذلك التأمين الصحي والإجازات مدفوعة الأجر.' },
    ],
    openings: 'الوظائف الشاغرة الحالية',
    jobs: [
        { title: 'أخصائي صحة أسنان', description: 'مطلوب أخصائي صحة أسنان مرخص لديه شغف بتثقيف المرضى والرعاية الوقائية. يفضل خبرة سنتين أو أكثر.' },
        { title: 'مساعد طبيب أسنان', description: 'فرصة رائعة لمساعد طبيب أسنان معتمد لدعم أطباء الأسنان لدينا في تقديم رعاية ممتازة للمرضى. يجب أن يكون لاعب فريق.' },
    ],
    location: 'مسقط، عمان',
    apply: 'قدم الآن',
  },
  blog: {
    title: 'من مدونتنا',
    subtitle: 'ابق على اطلاع بآخر الأخبار والنصائح والرؤى في صحة الأسنان من فريق الخبراء لدينا.',
    posts: [
        { title: 'الفوائد المدهشة لاستخدام خيط الأسنان يوميًا', excerpt: 'اكتشف كيف يمكن لهذه العادة البسيطة أن تحسن بشكل كبير ليس فقط صحة فمك، ولكن صحتك العامة أيضًا.' },
        { title: 'اختيار فرشاة الأسنان المناسبة لك', excerpt: 'يدوية أم كهربائية؟ شعيرات ناعمة أم متوسطة؟ نحلل الخيارات لمساعدتك على اتخاذ الخيار الأفضل.' },
        { title: 'فهم تبييض الأسنان: خرافات مقابل حقائق', excerpt: 'تعلم ما الذي ينجح حقًا عندما يتعلق الأمر بالحصول على ابتسامة أكثر إشراقًا وما هي الخرافات الشائعة التي يجب تجنبها.' },
    ],
    authors: ['بقلم د. إيفلين ريد', 'بقلم د. ماركوس ثورن', 'بقلم د. عائشة خان'],
    dates: ['15 يونيو 2024', '10 يونيو 2024', '5 يونيو 2024'],
  },
  healthTips: {
    title: 'نصائح وتحديثات صحية',
    subtitle: 'مصدرك لمعلومات صحة الأسنان الموثوقة وأخبار العيادة.',
    tips: [
        { date: '1 يوليو 2024', title: 'نصائح لصحة الفم في الصيف', summary: 'يجلب فصل الصيف المرح والشمس واعتبارات خاصة لأسنانك. تعلم كيفية حماية ابتسامتك أثناء إجازتك، من الحفاظ على رطوبة الجسم إلى الانتباه إلى الحلويات الصيفية السكرية. نغطي نصائح للتعامل مع حساسية المشروبات الباردة والمزيد.' },
        { date: '20 يونيو 2024', title: 'العلاقة بين صحة الفم وأمراض القلب', summary: 'تستمر الدراسات الحديثة في تسليط الضوء على العلاقة الحاسمة بين صحة لثتك وجهازك القلبي الوعائي. افهم مخاطر أمراض اللثة وكيف يمكن أن يساهم الحفاظ على نظافة الفم الجيدة في صحة القلب.' },
        { date: '5 يونيو 2024', title: 'الترحيب بالدكتور صموئيل تشين', summary: 'يسعدنا أن نعلن عن انضمام الدكتور صموئيل تشين، أخصائي زراعة الأسنان الشهير، إلى فريق مركز الأفق الطبي. يجلب الدكتور تشين ثروة من الخبرة والتجربة في زراعة الأسنان المتقدمة وإعادة بناء الفم بالكامل.' },
    ],
  },
  testimonials: {
    title: 'ماذا يقول مرضانا',
    subtitle: 'نحن فخورون بالعلاقات التي نبنيها والابتسامات التي نصنعها. انظر ماذا يقول مرضانا عن تجربتهم.',
    items: [
      { name: 'سارة ل.', location: 'مسقط، عمان', rating: 5, quote: 'أفضل تجربة أسنان مررت بها على الإطلاق! الفريق بأكمله محترف وودود ويهتم حقًا بمرضاهم. لا يمكن أن أكون أكثر سعادة بابتسامتي الجديدة.' },
      { name: 'أحمد الفارسي', location: 'السيب، عمان', rating: 5, quote: 'كان الدكتور ثورن وفريقه رائعين طوال فترة علاجي بالإنفزلاين. شرحوا كل شيء بوضوح والنتائج رائعة. موصى به بشدة!' },
      { name: 'فاطمة ك.', location: 'بوشر، عمان', rating: 5, quote: 'كنت متوترة جدًا بشأن الحصول على زراعة أسنان، لكن الدكتور تشين جعل العملية غير مؤلمة ومريحة تمامًا. المنشأة من الدرجة الأولى. شكرًا لك، عيادة الأفق!' },
    ],
  },
  philosophy: {
    title: 'فلسفتنا',
    subtitle: 'قيمنا الأساسية توجه كل جانب من جوانب ممارستنا، مما يضمن حصولك على أفضل رعاية ممكنة.',
    points: [
      { title: 'رعاية تتمحور حول المريض', description: 'احتياجاتك وراحتك وأهدافك هي في طليعة كل ما نقوم به. نحن نستمع إليك ونضع خطط علاج شخصية.' },
      { title: 'الالتزام بالتميز', description: 'نسعى لتحقيق أعلى معايير التميز السريري والشخصي من خلال التعلم المستمر والتكنولوجيا الحديثة.' },
      { title: 'النزاهة والرحمة', description: 'نعامل كل مريض باحترام وصدق وتعاطف، ونبني علاقات مبنية على الثقة ونخلق بيئة إيجابية وداعمة.' },
    ],
  },
  trustBar: {
    title: 'موثوق به من قبل المجتمع ومعترف به من قبل الصناعة',
  },
  smileGallery: {
    title: 'معرض الابتسامات',
    subtitle: 'شاهد النتائج التي غيرت حياة مرضانا. ابتسامتك الجديدة الجميلة في انتظارك.',
    items: [
        { case: 'الفينير', description: 'تجميل كامل للابتسامة باستخدام قشور البورسلين لتصحيح اللون والشكل والمحاذاة.' },
        { case: 'إنفزلاين', description: 'تقويم الأسنان باستخدام قوالب شفافة، وإغلاق الفجوات وتصحيح العضة.' },
        { case: 'زراعة الأسنان', description: 'استبدال الأسنان الأمامية المفقودة بزرعات متينة وطبيعية المظهر.' },
    ],
    after: 'بعد',
    before: 'قبل',
  },
  ui: {
    readMore: 'اقرأ المزيد',
    viewBio: 'عرض السيرة الذاتية',
    close: 'إغلاق',
    expertise: 'مجالات الخبرة',
    backToServices: 'العودة إلى الخدمات',
  },
};


const defaultTexts = { en, ar };

export default defaultTexts;
