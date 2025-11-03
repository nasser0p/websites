
export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  expertise: string[];
}
export interface ServiceItem {
  id: string,
  title: string;
  description: string;
  details: {
    introduction: string;
    points: { title: string; description: string }[];
  }
}

const translations = {
  en: {
    header: {
      firmName: "Nasser bin Masoud Al Shamli Advocates",
      nav: {
        home: "Home",
        about: "About Us",
        services: "Our Services",
        team: "Our Team",
        careers: "Careers",
        blog: "Blog",
        legalUpdates: "Legal Updates",
        contact: "Contact Us",
      },
    },
    hero: {
      title: "Nasser bin Masoud Al Shamli Advocates",
      subtitle: "Providing Expert Legal Counsel with Integrity and Professionalism.",
      cta: "Contact Us",
    },
    about: {
      title: "About Our Firm",
      p1: "Nasser bin Masoud Al Shamli Advocates is a premier law firm dedicated to providing exceptional legal services across a wide range of practice areas. Our foundation is built upon a commitment to excellence, integrity, and a deep understanding of our clients' needs.",
      p2: "Our team of experienced attorneys brings a wealth of knowledge and a proactive approach to every case, ensuring that we deliver strategic, effective, and personalized solutions. We pride ourselves on building long-lasting relationships with our clients, guiding them through complex legal landscapes with clarity and confidence.",
    },
    philosophy: {
      title: "Our Philosophy",
      subtitle: "Our guiding principles are the bedrock of our practice, ensuring we deliver unparalleled service and results.",
      items: [
        {
          title: "Integrity",
          description: "We uphold the highest standards of professional ethics, ensuring transparency and trust in all our client relationships.",
        },
        {
          title: "Excellence",
          description: "Our commitment to excellence drives us to deliver the highest quality legal services and achieve the best possible outcomes.",
        },
        {
          title: "Client-Centric",
          description: "We place our clients at the heart of everything we do, offering personalized solutions tailored to their unique needs and objectives.",
        },
      ]
    },
    services: {
      title: "Our Services",
      subtitle: "We offer a comprehensive range of legal services to meet the diverse needs of our clients.",
      items: [
        {
          id: 'corporate-law',
          title: 'Corporate Law',
          description: 'Expert advice on corporate governance, mergers, acquisitions, and commercial contracts.',
          details: {
            introduction: 'Our Corporate Law practice provides comprehensive legal counsel to businesses of all sizes, from startups to multinational corporations. We navigate the complexities of corporate regulations to ensure your business operates smoothly and in full compliance.',
            points: [
              { title: 'Mergers & Acquisitions', description: 'Strategic guidance through every stage of M&A transactions, from due diligence to post-merger integration.' },
              { title: 'Corporate Governance', description: 'Advising boards and management on best practices, compliance, and fiduciary responsibilities.' },
              { title: 'Commercial Contracts', description: 'Drafting, negotiating, and reviewing a wide array of commercial agreements to protect your interests.' },
              { title: 'Company Formation', description: 'Assisting with the establishment of legal entities in Oman, ensuring a solid foundation for your venture.' }
            ]
          }
        },
        {
          id: 'litigation-dispute-resolution',
          title: 'Litigation & Dispute Resolution',
          description: 'Representing clients in complex civil and commercial litigation and arbitration.',
           details: {
            introduction: 'Our formidable litigation team is dedicated to resolving disputes efficiently and effectively. We represent clients in court, arbitration, and mediation, always striving to achieve the most favorable outcome while minimizing disruption to your business.',
            points: [
              { title: 'Commercial Litigation', description: 'Handling complex business disputes including breach of contract, shareholder disputes, and commercial fraud.' },
              { title: 'Civil Litigation', description: 'Representing individuals and companies in a wide range of civil matters.' },
              { title: 'Arbitration', description: 'Expert representation in both domestic and international arbitration proceedings.' },
              { title: 'Mediation & ADR', description: 'Utilizing alternative dispute resolution methods to find amicable and cost-effective solutions.' }
            ]
          }
        },
        {
          id: 'intellectual-property',
          title: 'Intellectual Property',
          description: 'Protecting your innovations with patent, trademark, and copyright services.',
           details: {
            introduction: 'In today\'s innovation-driven economy, protecting your intellectual property is paramount. Our IP practice offers a full suite of services to safeguard your most valuable assets.',
            points: [
              { title: 'Trademark Registration', description: 'Securing and managing your brand identity through comprehensive trademark services.' },
              { title: 'Patent Protection', description: 'Assisting inventors and companies in protecting their innovations through patent filing and prosecution.' },
              { title: 'Copyright Law', description: 'Advising creators and businesses on protecting their creative works.' },
              { title: 'IP Litigation', description: 'Enforcing and defending your IP rights against infringement and unauthorized use.' }
            ]
          }
        },
        {
          id: 'banking-finance',
          title: 'Banking & Finance',
          description: 'Advising financial institutions and borrowers on a wide range of financing transactions.',
           details: {
            introduction: 'We provide sophisticated legal advice to a diverse clientele in the banking and finance sector. Our team has deep industry knowledge, advising on both conventional and Islamic finance transactions.',
            points: [
              { title: 'Project Finance', description: 'Structuring and negotiating financing for large-scale infrastructure and energy projects.' },
              { title: 'Corporate Lending', description: 'Representing both lenders and borrowers in syndicated loans, secured lending, and trade finance.' },
              { title: 'Islamic Finance', description: 'Expertise in Sharia-compliant financial products and transactions.' },
              { title: 'Regulatory Compliance', description: 'Advising financial institutions on the complex regulatory landscape in Oman.' }
            ]
          }
        },
        {
          id: 'family-law',
          title: 'Family Law',
          description: 'Compassionate and skilled representation in all areas of family and matrimonial law.',
           details: {
            introduction: 'Navigating family law matters requires both legal acumen and profound empathy. Our team provides discreet, compassionate, and robust representation to protect your interests during challenging times.',
            points: [
              { title: 'Divorce & Separation', description: 'Guidance through all aspects of marital dissolution, including asset division and spousal support.' },
              { title: 'Child Custody', description: 'Advocating for the best interests of your children in custody, visitation, and support matters.' },
              { title: 'Inheritance & Estate Planning', description: 'Assisting with wills, trusts, and succession planning to secure your family\'s future.' },
              { title: 'Prenuptial Agreements', description: 'Drafting agreements to protect assets and clarify financial arrangements before marriage.' }
            ]
          }
        },
        {
          id: 'real-estate-law',
          title: 'Real Estate Law',
          description: 'Comprehensive legal services for residential and commercial real estate transactions.',
           details: {
            introduction: 'Our real estate practice serves developers, investors, landlords, and tenants across all aspects of property law. We facilitate smooth transactions and resolve complex real estate disputes.',
            points: [
              { title: 'Property Transactions', description: 'Handling acquisitions, sales, and leasing of commercial and residential properties.' },
              { title: 'Real Estate Development', description: 'Advising on land acquisition, zoning, and construction contracts for development projects.' },
              { title: 'Landlord & Tenant Law', description: 'Representing clients in lease negotiations and resolving tenancy disputes.' },
              { title: 'Construction Law', description: 'Providing legal support for construction projects, from contract drafting to dispute resolution.' }
            ]
          }
        }
      ]
    },
    team: {
        title: "Meet Our Team",
        subtitle: "Our strength lies in our individual talents and our collaborative approach to law.",
        members: [
            { 
              name: 'Nasser Al Zidi', 
              title: 'Founder & Senior Partner',
              bio: 'Nasser Al Zidi is the visionary founder of the firm. With over 30 years of experience, he is a highly respected figure in the Omani legal community, renowned for his strategic acumen in corporate law and complex litigation. He has advised on some of the most significant transactions and disputes in the Sultanate. Nasser is also a licensed arbitrator and is frequently called upon to mediate high-stakes commercial disputes.',
              expertise: ['Corporate Law', 'Mergers & Acquisitions', 'Arbitration', 'Government Contracts']
            },
            { 
              name: 'Fatima Al Harthy', 
              title: 'Managing Partner',
              bio: 'Fatima Al Harthy oversees the firm\'s operations and leads the Banking & Finance practice. Her expertise in both conventional and Islamic finance is unparalleled. She has a proven track record of advising major financial institutions on regulatory matters, project finance, and complex debt restructuring. Fatima is known for her meticulous approach and her ability to simplify complex legal issues for clients.',
              expertise: ['Banking & Finance', 'Islamic Finance', 'Project Finance', 'Regulatory Compliance']
            },
            { 
              name: 'Ahmed Al Balushi', 
              title: 'Senior Associate',
              bio: 'Ahmed Al Balushi is a tenacious litigator with a focus on commercial and civil disputes. He has successfully represented a wide range of clients before all levels of Omani courts. Ahmed is praised for his sharp analytical skills and his compelling courtroom presence. He is also experienced in intellectual property enforcement and real estate litigation.',
              expertise: ['Commercial Litigation', 'Intellectual Property', 'Real Estate Law', 'Civil Disputes']
            },
            { 
              name: 'Salma Al Rashdi', 
              title: 'Associate Attorney',
              bio: 'Salma Al Rashdi is a rising star in the legal field, specializing in family law and corporate advisory. She brings a compassionate yet firm approach to sensitive family matters, including divorce and child custody. In her corporate work, she assists senior partners with due diligence, contract drafting, and company formation, demonstrating a keen eye for detail and a strong work ethic.',
              expertise: ['Family Law', 'Corporate Advisory', 'Contract Law', 'Legal Research']
            },
        ]
    },
    testimonials: {
        title: "What Our Clients Say",
        subtitle: "Our commitment to excellence is reflected in the success and satisfaction of our clients.",
        items: [
            {
                quote: "Nasser bin Masoud Al Shamli Advocates provided unparalleled legal expertise and guided us through a complex merger with utmost professionalism. Their attention to detail and strategic advice were invaluable.",
                name: "Ahmed Al-Farsi",
                company: "CEO, Tech Solutions LLC"
            },
            {
                quote: "The litigation team is exceptional. They are tenacious, well-prepared, and truly fought for our best interests. I couldn't have asked for better representation.",
                name: "Fatima Al-Said",
                company: "Director, Global Imports"
            },
            {
                quote: "For any real estate transaction, I wouldn't trust anyone else. Their deep knowledge of the Omani property market saved us time and potential pitfalls. Highly recommended.",
                name: "Yusuf Al-Habsi",
                company: "Property Developer"
            }
        ]
    },
    contact: {
        title: "Contact Us",
        subtitle: "Have a legal question? Get in touch with us. We are here to help.",
        form: {
            name: "Your Name",
            email: "Your Email",
            subject: "Subject",
            message: "Your Message",
            send: "Send Message",
            sending: "Sending...",
            successTitle: "Thank you!",
            successMessage: "Your message has been sent successfully. We will get back to you shortly.",
        },
        info: {
            address: "Address",
            addressValue: "123 Legal Avenue, Muscat, Sultanate of Oman",
            phone: "Phone",
            email: "Email",
        }
    },
    careers: {
        title: "Careers",
        subtitle: "Join our team of dedicated professionals and grow your career with a leading law firm.",
        whyJoin: "Why Join Nasser bin Masoud Al Shamli Advocates?",
        reasons: [
            { title: "Professional Growth", description: "We are committed to the continuous development of our team members through mentorship, training, and challenging work." },
            { title: "Collaborative Culture", description: "Work in a supportive and collaborative environment where teamwork and mutual respect are highly valued." },
            { title: "Impactful Work", description: "Contribute to meaningful cases and provide exceptional service to a diverse range of clients." },
            { title: "Competitive Compensation", description: "We offer a competitive salary and benefits package to attract and retain the best talent in the legal field." },
        ],
        openings: "Current Openings",
        jobs: [
            { title: 'Corporate Lawyer', description: 'Seeking an experienced corporate lawyer to handle M&A, corporate governance, and commercial contracts. Minimum 5 years experience required.' },
            { title: 'Paralegal', description: 'A diligent and organized paralegal to support our litigation team. Strong research and drafting skills are essential.' },
            { title: 'Legal Secretary', description: 'We are looking for a professional legal secretary to manage schedules, correspondence, and office administration.' },
        ],
        location: "Muscat, Oman",
        apply: "Apply Now"
    },
    blog: {
        title: "From Our Blog",
        subtitle: "Insights and analysis on the latest legal trends and topics from our expert team.",
        posts: [
            { title: 'Navigating Cross-Border Contracts: Key Considerations', excerpt: 'Understanding the complexities of international agreements is crucial for global business. Here are the key points to consider.' },
            { title: 'The Rise of Digital Assets and Intellectual Property Law', excerpt: 'As digital assets become more prevalent, the legal landscape for IP protection is evolving rapidly. We explore the latest trends.' },
            { title: 'Arbitration vs. Litigation: Choosing the Right Path', excerpt: 'Deciding between arbitration and litigation can have significant implications for your dispute. We break down the pros and cons of each.' },
        ],
        authors: ['Nasser Al Zidi', 'Fatima Al Harthy', 'Ahmed Al Balushi'],
        dates: ['October 26, 2023', 'October 15, 2023', 'September 28, 2023']
    },
    legalUpdates: {
        title: "Legal Updates",
        subtitle: "Stay informed on the latest regulatory changes and legal developments in Oman and the region.",
        updates: [
            { title: 'New Amendments to the Omani Commercial Companies Law', date: 'November 1, 2023', summary: 'The Ministry of Commerce, Industry and Investment Promotion has issued new amendments aimed at streamlining foreign investment and corporate governance.' },
            { title: 'Updated Regulations on Data Protection and Privacy', date: 'October 20, 2023', summary: 'Oman introduces enhanced data protection regulations, aligning with global standards to protect personal data and privacy for individuals and corporations.' },
            { title: 'Real Estate Law Update: New Foreign Ownership Rules', date: 'September 15, 2023', summary: 'Recent royal decrees have expanded the areas where foreign nationals can own property, aiming to boost the real estate market.' },
            { title: 'Changes in Labor Law Regarding Expatriate Employment', date: 'August 30, 2023', summary: 'The Ministry of Labour has announced new guidelines concerning the employment contracts and visa renewals for expatriate workers.' }
        ]
    },
    footer: {
      about: "A leading law firm providing comprehensive legal solutions with a commitment to excellence and client satisfaction.",
      quickLinks: "Quick Links",
      contact: "Contact",
      location: "Muscat, Oman",
      rights: "All Rights Reserved."
    },
    ui: {
      readMore: "Read More",
      viewBio: "View Bio",
      close: "Close",
      expertise: "Areas of Expertise",
      backToServices: "Back to All Services"
    }
  },
  ar: {
    header: {
      firmName: "ناصر بن مسعود الشملي",
      nav: {
        home: "الرئيسية",
        about: "من نحن",
        services: "خدماتنا",
        team: "فريقنا",
        careers: "الوظائف",
        blog: "المدونة",
        legalUpdates: "التحديثات القانونية",
        contact: "اتصل بنا",
      },
    },
    hero: {
      title: "ناصر بن مسعود الشملي",
      subtitle: "نقدم استشارات قانونية متخصصة بنزاهة واحترافية.",
      cta: "اتصل بنا",
    },
    about: {
      title: "عن شركتنا",
      p1: "ناصر بن مسعود الشملي للمحاماة هي شركة محاماة رائدة مكرسة لتقديم خدمات قانونية استثنائية في مجموعة واسعة من مجالات الممارسة. تأسست شركتنا على الالتزام بالتميز والنزاهة والفهم العميق لاحتياجات عملائنا.",
      p2: "يتمتع فريقنا من المحامين ذوي الخبرة بثروة من المعرفة ونهج استباقي في كل قضية، مما يضمن تقديم حلول استراتيجية وفعالة وشخصية. نحن نفخر ببناء علاقات طويلة الأمد مع عملائنا، وتوجيههم عبر المشهد القانوني المعقد بوضوح وثقة.",
    },
    philosophy: {
      title: "فلسفتنا",
      subtitle: "مبادئنا التوجيهية هي حجر الأساس لممارستنا، مما يضمن تقديم خدمة ونتائج لا مثيل لها.",
      items: [
        {
          title: "النزاهة",
          description: "نحن نلتزم بأعلى معايير الأخلاق المهنية، مما يضمن الشفافية والثقة في جميع علاقاتنا مع العملاء.",
        },
        {
          title: "التميز",
          description: "إن التزامنا بالتميز يدفعنا إلى تقديم خدمات قانونية عالية الجودة وتحقيق أفضل النتائج الممكنة.",
        },
        {
          title: "التركيز على العميل",
          description: "نحن نضع عملائنا في صميم كل ما نقوم به، ونقدم حلولاً شخصية مصممة لتلبية احتياجاتهم وأهدافهم الفريدة.",
        },
      ]
    },
    services: {
      title: "خدماتنا",
      subtitle: "نحن نقدم مجموعة شاملة من الخدمات القانونية لتلبية الاحتياجات المتنوعة لعملائنا.",
      items: [
        {
          id: 'corporate-law',
          title: 'قانون الشركات',
          description: 'استشارات متخصصة في حوكمة الشركات، وعمليات الدمج والاستحواذ، والعقود التجارية.',
           details: {
            introduction: 'تقدم ممارستنا في قانون الشركات استشارات قانونية شاملة للشركات من جميع الأحجام، من الشركات الناشئة إلى الشركات متعددة الجنسيات. نحن نتنقل في تعقيدات لوائح الشركات لضمان عمل عملك بسلاسة وبامتثال كامل.',
            points: [
              { title: 'الدمج والاستحواذ', description: 'توجيه استراتيجي خلال كل مرحلة من معاملات الدمج والاستحواذ، من العناية الواجبة إلى التكامل بعد الدمج.' },
              { title: 'حوكمة الشركات', description: 'تقديم المشورة لمجالس الإدارة والإدارة بشأن أفضل الممارسات والامتثال والمسؤوليات الائتمانية.' },
              { title: 'العقود التجارية', description: 'صياغة والتفاوض ومراجعة مجموعة واسعة من الاتفاقيات التجارية لحماية مصالحك.' },
              { title: 'تأسيس الشركات', description: 'المساعدة في إنشاء الكيانات القانونية في عمان، مما يضمن أساسًا متينًا لمشروعك.' }
            ]
          }
        },
        {
          id: 'litigation-dispute-resolution',
          title: 'التقاضي وحل النزاعات',
          description: 'تمثيل العملاء في الدعاوى المدنية والتجارية المعقدة والتحكيم.',
          details: {
            introduction: 'فريق التقاضي القوي لدينا مكرس لحل النزاعات بكفاءة وفعالية. نحن نمثل العملاء في المحاكم والتحكيم والوساطة، ونسعى دائمًا لتحقيق النتيجة الأكثر ملاءمة مع تقليل الاضطراب في عملك.',
            points: [
              { title: 'التقاضي التجاري', description: 'التعامل مع نزاعات الأعمال المعقدة بما في ذلك خرق العقود ونزاعات المساهمين والاحتيال التجاري.' },
              { title: 'التقاضي المدني', description: 'تمثيل الأفراد والشركات في مجموعة واسعة من المسائل المدنية.' },
              { title: 'التحكيم', description: 'تمثيل خبير في إجراءات التحكيم المحلية والدولية.' },
              { title: 'الوساطة والحلول البديلة للنزاعات', description: 'استخدام طرق بديلة لحل النزاعات لإيجاد حلول ودية وفعالة من حيث التكلفة.' }
            ]
          }
        },
        {
          id: 'intellectual-property',
          title: 'الملكية الفكرية',
          description: 'حماية ابتكاراتك من خلال خدمات براءات الاختراع والعلامات التجارية وحقوق النشر.',
           details: {
            introduction: 'في اقتصاد اليوم القائم على الابتكار، تعد حماية ملكيتك الفكرية أمرًا بالغ الأهمية. تقدم ممارسة الملكية الفكرية لدينا مجموعة كاملة من الخدمات لحماية أصولك الأكثر قيمة.',
            points: [
              { title: 'تسجيل العلامات التجارية', description: 'تأمين وإدارة هوية علامتك التجارية من خلال خدمات العلامات التجارية الشاملة.' },
              { title: 'حماية براءات الاختراع', description: 'مساعدة المخترعين والشركات في حماية ابتكاراتهم من خلال إيداع براءات الاختراع ومتابعتها.' },
              { title: 'قانون حق المؤلف', description: 'تقديم المشورة للمبدعين والشركات بشأن حماية أعمالهم الإبداعية.' },
              { title: 'التقاضي في مجال الملكية الفكرية', description: 'إنفاذ حقوق الملكية الفكرية الخاصة بك والدفاع عنها ضد الانتهاك والاستخدام غير المصرح به.' }
            ]
          }
        },
        {
          id: 'banking-finance',
          title: 'الخدمات المصرفية والمالية',
          description: 'تقديم المشورة للمؤسسات المالية والمقترضين بشأن مجموعة واسعة من المعاملات التمويلية.',
           details: {
            introduction: 'نحن نقدم استشارات قانونية متطورة لمجموعة متنوعة من العملاء في القطاع المصرفي والمالي. يتمتع فريقنا بمعرفة عميقة بالصناعة، ويقدم المشورة بشأن المعاملات المالية التقليدية والإسلامية.',
            points: [
              { title: 'تمويل المشاريع', description: 'هيكلة والتفاوض على تمويل مشاريع البنية التحتية والطاقة واسعة النطاق.' },
              { title: 'إقراض الشركات', description: 'تمثيل كل من المقرضين والمقترضين في القروض المشتركة والإقراض المضمون وتمويل التجارة.' },
              { title: 'التمويل الإسلامي', description: 'خبرة في المنتجات والمعاملات المالية المتوافقة مع الشريعة الإسلامية.' },
              { title: 'الامتثال التنظيمي', description: 'تقديم المشورة للمؤسسات المالية بشأن المشهد التنظيمي المعقد في عمان.' }
            ]
          }
        },
        {
          id: 'family-law',
          title: 'قانون الأسرة',
          description: 'تمثيل عطوف وماهر في جميع مجالات قانون الأسرة والأحوال الشخصية.',
           details: {
            introduction: 'يتطلب التعامل مع مسائل قانون الأسرة فطنة قانونية وتعاطفًا عميقًا. يقدم فريقنا تمثيلاً سريًا ورحيمًا وقويًا لحماية مصالحك خلال الأوقات الصعبة.',
            points: [
              { title: 'الطلاق والانفصال', description: 'إرشادات عبر جميع جوانب فسخ الزواج، بما في ذلك تقسيم الأصول ودعم الزوج.' },
              { title: 'حضانة الأطفال', description: 'الدفاع عن مصالح أطفالك الفضلى في مسائل الحضانة والزيارة والنفقة.' },
              { title: 'الميراث والتخطيط العقاري', description: 'المساعدة في الوصايا والصناديق الاستئمانية وتخطيط الخلافة لتأمين مستقبل عائلتك.' },
              { title: 'اتفاقيات ما قبل الزواج', description: 'صياغة اتفاقيات لحماية الأصول وتوضيح الترتيبات المالية قبل الزواج.' }
            ]
          }
        },
        {
          id: 'real-estate-law',
          title: 'قانون العقارات',
          description: 'خدمات قانونية شاملة للمعاملات العقارية السكنية والتجارية.',
          details: {
            introduction: 'تخدم ممارستنا العقارية المطورين والمستثمرين والملاك والمستأجرين في جميع جوانب قانون الملكية. نحن نسهل المعاملات السلسة ونحل النزاعات العقارية المعقدة.',
            points: [
              { title: 'المعاملات العقارية', description: 'التعامل مع عمليات الاستحواذ والبيع والتأجير للعقارات التجارية والسكنية.' },
              { title: 'التطوير العقاري', description: 'تقديم المشورة بشأن حيازة الأراضي وتقسيم المناطق وعقود البناء لمشاريع التطوير.' },
              { title: 'قانون المالك والمستأجر', description: 'تمثيل العملاء في مفاوضات الإيجار وحل نزاعات الإيجار.' },
              { title: 'قانون البناء', description: 'تقديم الدعم القانوني لمشاريع البناء، من صياغة العقود إلى حل النزاعات.' }
            ]
          }
        }
      ]
    },
     team: {
        title: "تعرف على فريقنا",
        subtitle: "قوتنا تكمن في مواهبنا الفردية ونهجنا التعاوني في القانون.",
        members: [
            { 
              name: 'ناصر الزيدي', 
              title: 'المؤسس والشريك الأقدم',
              bio: 'ناصر الزيدي هو المؤسس صاحب الرؤية للشركة. مع أكثر من 30 عامًا من الخبرة، فهو شخصية تحظى باحترام كبير في المجتمع القانوني العماني، ويشتهر ببراعته الاستراتيجية في قانون الشركات والتقاضي المعقد. لقد قدم المشورة بشأن بعض أهم المعاملات والنزاعات في السلطنة. ناصر هو أيضًا محكم مرخص وغالبًا ما يتم استدعاؤه للتوسط في النزاعات التجارية عالية المخاطر.',
              expertise: ['قانون الشركات', 'الدمج والاستحواذ', 'التحكيم', 'العقود الحكومية']
            },
            { 
              name: 'فاطمة الحارثي', 
              title: 'الشريك الإداري',
              bio: 'تشرف فاطمة الحارثي على عمليات الشركة وتقود ممارسة الخدمات المصرفية والمالية. خبرتها في التمويل التقليدي والإسلامي لا مثيل لها. لديها سجل حافل في تقديم المشورة للمؤسسات المالية الكبرى بشأن المسائل التنظيمية وتمويل المشاريع وإعادة هيكلة الديون المعقدة. تشتهر فاطمة بنهجها الدقيق وقدرتها على تبسيط القضايا القانونية المعقدة للعملاء.',
              expertise: ['الخدمات المصرفية والمالية', 'التمويل الإسلامي', 'تمويل المشاريع', 'الامتثال التنظيمي']
            },
            { 
              name: 'أحمد البلوشي', 
              title: 'محامٍ أول',
              bio: 'أحمد البلوشي محامٍ مثابر يركز على النزاعات التجارية والمدنية. لقد نجح في تمثيل مجموعة واسعة من العملاء أمام جميع مستويات المحاكم العمانية. يُشاد بأحمد لمهاراته التحليلية الحادة وحضوره المقنع في قاعة المحكمة. وهو أيضًا من ذوي الخبرة في إنفاذ الملكية الفكرية والتقاضي العقاري.',
              expertise: ['التقاضي التجاري', 'الملكية الفكرية', 'قانون العقارات', 'النزاعات المدنية']
            },
            { 
              name: 'سلمى الراشدي', 
              title: 'محامية مساعدة',
              bio: 'سلمى الراشدي نجمة صاعدة في المجال القانوني، متخصصة في قانون الأسرة والاستشارات المؤسسية. إنها تقدم نهجًا رحيمًا وحازمًا في نفس الوقت للمسائل العائلية الحساسة، بما في ذلك الطلاق وحضانة الأطفال. في عملها المؤسسي، تساعد كبار الشركاء في العناية الواجبة وصياغة العقود وتأسيس الشركات، مما يدل على اهتمام شديد بالتفاصيل وأخلاقيات عمل قوية.',
              expertise: ['قانون الأسرة', 'الاستشارات المؤسسية', 'قانون العقود', 'البحث القانوني']
            },
        ]
    },
    testimonials: {
        title: "ماذا يقول عملاؤنا",
        subtitle: "التزامنا بالتميز ينعكس في نجاح ورضا عملائنا.",
        items: [
            {
                quote: "قدمت شركة ناصر بن مسعود الشملي للمحاماة خبرة قانونية لا مثيل لها وقادتنا خلال عملية دمج معقدة بأقصى درجات الاحترافية. كان اهتمامهم بالتفاصيل ونصائحهم الاستراتيجية لا يقدر بثمن.",
                name: "أحمد الفارسي",
                company: "الرئيس التنفيذي، حلول التكنولوجيا ذ.م.م"
            },
            {
                quote: "فريق التقاضي استثنائي. إنهم مثابرون ومستعدون جيدًا وقاتلوا حقًا من أجل مصالحنا الفضلى. لم أكن لأطلب تمثيلًا أفضل.",
                name: "فاطمة السعيد",
                company: "مديرة، الاستيراد العالمي"
            },
            {
                quote: "لأي معاملة عقارية، لن أثق بأي شخص آخر. معرفتهم العميقة بسوق العقارات العماني وفرت علينا الوقت والمزالق المحتملة. موصى به للغاية.",
                name: "يوسف الحبسي",
                company: "مطور عقاري"
            }
        ]
    },
    contact: {
        title: "اتصل بنا",
        subtitle: "لديك سؤال قانوني؟ تواصل معنا. نحن هنا للمساعدة.",
        form: {
            name: "اسمك",
            email: "بريدك الإلكتروني",
            subject: "الموضوع",
            message: "رسالتك",
            send: "أرسل الرسالة",
            sending: "جار الإرسال...",
            successTitle: "شكرًا لك!",
            successMessage: "تم إرسال رسالتك بنجاح. سوف نرد عليك قريبًا.",
        },
        info: {
            address: "العنوان",
            addressValue: "123 شارع القانون، مسقط، سلطنة عمان",
            phone: "الهاتف",
            email: "البريد الإلكتروني",
        }
    },
    careers: {
        title: "الوظائف",
        subtitle: "انضم إلى فريقنا من المهنيين المتفانين وطور حياتك المهنية مع شركة محاماة رائدة.",
        whyJoin: "لماذا تنضم إلى ناصر بن مسعود الشملي للمحاماة؟",
        reasons: [
            { title: "النمو المهني", description: "نحن ملتزمون بالتطوير المستمر لأعضاء فريقنا من خلال الإرشاد والتدريب والعمل المليء بالتحديات." },
            { title: "ثقافة تعاونية", description: "اعمل في بيئة داعمة وتعاونية حيث يتم تقدير العمل الجماعي والاحترام المتبادل بشكل كبير." },
            { title: "عمل مؤثر", description: "ساهم في قضايا هادفة وقدم خدمة استثنائية لمجموعة متنوعة من العملاء." },
            { title: "تعويضات تنافسية", description: "نحن نقدم راتبًا ومزايا تنافسية لجذب أفضل المواهب في المجال القانوني والاحتفاظ بها." },
        ],
        openings: "الوظائف الشاغرة الحالية",
        jobs: [
            { title: 'محامي شركات', description: 'مطلوب محامٍ متمرس في شؤون الشركات للتعامل مع عمليات الدمج والاستحواذ وحوكمة الشركات والعقود التجارية. خبرة لا تقل عن 5 سنوات مطلوبة.' },
            { title: 'مساعد قانوني', description: 'مساعد قانوني مجتهد ومنظم لدعم فريق التقاضي لدينا. مهارات بحث وصياغة قوية ضرورية.' },
            { title: 'سكرتير قانوني', description: 'نبحث عن سكرتير قانوني محترف لإدارة الجداول الزمنية والمراسلات وإدارة المكاتب.' },
        ],
        location: "مسقط، عمان",
        apply: "قدم الآن"
    },
    blog: {
        title: "من مدونتنا",
        subtitle: "رؤى وتحليلات حول أحدث الاتجاهات والمواضيع القانونية من فريق خبرائنا.",
        posts: [
            { title: 'التنقل في العقود عبر الحدود: اعتبارات رئيسية', excerpt: 'يعد فهم تعقيدات الاتفاقيات الدولية أمرًا بالغ الأهمية للأعمال التجارية العالمية. إليك النقاط الرئيسية التي يجب مراعاتها.' },
            { title: 'صعود الأصول الرقمية وقانون الملكية الفكرية', excerpt: 'مع تزايد انتشار الأصول الرقمية، يتطور المشهد القانوني لحماية الملكية الفكرية بسرعة. نستكشف أحدث الاتجاهات.' },
            { title: 'التحكيم مقابل التقاضي: اختيار المسار الصحيح', excerpt: 'يمكن أن يكون لاتخاذ قرار بين التحكيم والتقاضي آثار كبيرة على نزاعك. نحن نحلل إيجابيات وسلبيات كل منهما.' },
        ],
        authors: ['ناصر الزيدي', 'فاطمة الحارثي', 'أحمد البلوشي'],
        dates: ['26 أكتوبر 2023', '15 أكتوبر 2023', '28 سبتمبر 2023']
    },
    legalUpdates: {
        title: "التحديثات القانونية",
        subtitle: "ابق على اطلاع على آخر التغييرات التنظيمية والتطورات القانونية في عمان والمنطقة.",
        updates: [
            { title: 'تعديلات جديدة على قانون الشركات التجارية العماني', date: '1 نوفمبر 2023', summary: 'أصدرت وزارة التجارة والصناعة وترويج الاستثمار تعديلات جديدة تهدف إلى تبسيط الاستثمار الأجنبي وحوكمة الشركات.' },
            { title: 'لوائح محدثة بشأن حماية البيانات والخصوصية', date: '20 أكتوبر 2023', summary: 'تقدم عمان لوائح معززة لحماية البيانات، تتماشى مع المعايير العالمية لحماية البيانات الشخصية والخصوصية للأفراد والشركات.' },
            { title: 'تحديث قانون العقارات: قواعد جديدة للملكية الأجنبية', date: '15 سبتمبر 2023', summary: 'وسعت المراسيم السلطانية الأخيرة المناطق التي يمكن للمواطنين الأجانب تملك العقارات فيها، بهدف تعزيز سوق العقارات.' },
            { title: 'تغييرات في قانون العمل بشأن توظيف الوافدين', date: '30 أغسطس 2023', summary: 'أعلنت وزارة العمل عن مبادئ توجيهية جديدة بشأن عقود عمل وتجديد تأشيرات العمال الوافدين.' }
        ]
    },
    footer: {
      about: "شركة محاماة رائدة تقدم حلولاً قانونية شاملة مع الالتزام بالتميز ورضا العملاء.",
      quickLinks: "روابط سريعة",
      contact: "اتصل بنا",
      location: "مسقط، عمان",
      rights: "جميع الحقوق محفوظة."
    },
    ui: {
      readMore: "اقرأ المزيد",
      viewBio: "عرض السيرة الذاتية",
      close: "إغلاق",
      expertise: "مجالات الخبرة",
      backToServices: "العودة إلى كل الخدمات"
    }
  }
};

export default translations;
