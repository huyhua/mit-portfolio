export type Locale = "vi" | "en";

export type Skill = {
  name: string;
  level: number;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary?: string;
  groups: {
    title: string;
    items: string[];
  }[];
};

export type ProfileContent = {
  name: string;
  title: string;
  shortTitle: string;
  heroTagline: string;
  imageAlt: string;
  summary: string;
  contact: {
    birthDate: string;
    gender: string;
    phone: string;
    email: string;
    address: string;
  };
  ui: {
    switchLabel: string;
    emailCta: string;
    phoneCta: string;
    downloadCta: string;
    birthDate: string;
    gender: string;
    phone: string;
    email: string;
    address: string;
    experienceEyebrow: string;
    experienceTitle: string;
    experienceDescription: string;
    skillsEyebrow: string;
    skillsTitle: string;
    skillsDescription: string;
    toolsTitle: string;
    languagesTitle: string;
    highlightsEyebrow: string;
    highlightsTitle: string;
    achievementsTitle: string;
    projectsTitle: string;
    educationEyebrow: string;
    educationTitle: string;
    majorLabel: string;
    issuerLabel: string;
    qualitiesTitle: string;
    navHome: string;
    navContact: string;
    navExperience: string;
    navCapabilities: string;
    navHighlights: string;
    navEducation: string;
  };
  stats: { value: string; label: string }[];
  skills: Skill[];
  tools: string[];
  languages: Skill[];
  experiences: Experience[];
  achievements: string[];
  projects: string[];
  education: {
    school: string;
    period: string;
    major: string;
    program: string;
    thesis: string;
  };
  certificates: {
    name: string;
    date: string;
    issuer: string;
  }[];
  qualities: string[];
};

export const localeLabels: Record<Locale, string> = {
  vi: "VI",
  en: "EN",
};

export const profile = {
  vi: {
    name: "Hứa Vương Duy Bình",
    title: "Chuyên viên Quản trị Kế hoạch - Phân tích và Điều phối hoạt động",
    shortTitle: "Quản trị kế hoạch, phân tích dữ liệu và điều phối vận hành",
    heroTagline: "Đà Nẵng · Quản trị kế hoạch · Phân tích dữ liệu",
    imageAlt: "Chân dung Hứa Vương Duy Bình",
    summary:
      "Chuyên viên có kinh nghiệm trong lĩnh vực quản trị kế hoạch, theo dõi và đánh giá BSC/KPIs, phân tích dữ liệu, điều phối triển khai các dự án chuyển đổi số và xây dựng báo cáo quản trị. Có khả năng phối hợp hiệu quả với nhiều phòng ban, giám sát tiến độ thực hiện công việc, phân tích nguyên nhân ảnh hưởng đến kết quả hoạt động và đề xuất giải pháp nâng cao hiệu quả vận hành.",
    contact: {
      birthDate: "18/07/1996",
      gender: "Nam",
      phone: "0905 107 377",
      email: "hyd.binh@gmail.com",
      address: "818/42 Trần Cao Vân, Thanh Khê, TP. Đà Nẵng",
    },
    ui: {
      switchLabel: "Chọn ngôn ngữ",
      emailCta: "Gửi email",
      phoneCta: "Gọi điện",
      downloadCta: "Tải CV",
      birthDate: "Ngày sinh",
      gender: "Giới tính",
      phone: "Điện thoại",
      email: "Email",
      address: "Địa chỉ",
      experienceEyebrow: "Kinh nghiệm",
      experienceTitle: "Theo dõi mục tiêu, điều phối thực thi, đo lường kết quả",
      experienceDescription:
        "Kinh nghiệm tập trung vào quản trị kế hoạch kinh doanh, kiểm soát BSC/KPIs, báo cáo quản trị và vận hành thực tế.",
      skillsEyebrow: "Năng lực",
      skillsTitle: "Năng lực vận hành gắn với dữ liệu",
      skillsDescription:
        "Bộ kỹ năng kết hợp giữa lập kế hoạch, phân tích, báo cáo và triển khai công việc đa phòng ban.",
      toolsTitle: "Công cụ",
      languagesTitle: "Ngôn ngữ",
      highlightsEyebrow: "Thành tích",
      highlightsTitle: "Thành tích và dự án tiêu biểu",
      achievementsTitle: "Thành tích nổi bật",
      projectsTitle: "Dự án tiêu biểu",
      educationEyebrow: "Học vấn",
      educationTitle: "Nền tảng học vấn và phẩm chất",
      majorLabel: "Chuyên ngành",
      issuerLabel: "Nơi cấp",
      qualitiesTitle: "Tính cách & phẩm chất",
      navHome: "Trang đầu",
      navContact: "Liên hệ",
      navExperience: "Kinh nghiệm",
      navCapabilities: "Năng lực",
      navHighlights: "Thành tích",
      navEducation: "Học vấn",
    },
    stats: [
      { value: "10/2022", label: "Bắt đầu vai trò quản trị kế hoạch" },
      { value: "14", label: "Phòng cho thuê đang quản lý" },
      { value: "TOEIC 735", label: "Năng lực tiếng Anh" },
    ],
    skills: [
      { name: "Quản trị kế hoạch", level: 80 },
      { name: "Quản trị hiệu quả hoạt động", level: 70 },
      { name: "Theo dõi và đánh giá KPI", level: 60 },
      { name: "Điều phối công việc", level: 60 },
      { name: "Quản lý tiến độ dự án", level: 75 },
      { name: "Phân tích dữ liệu", level: 70 },
      { name: "Xây dựng báo cáo quản trị", level: 80 },
      { name: "Cải tiến quy trình làm việc", level: 90 },
    ],
    tools: [
      "Microsoft Excel",
      "PowerPoint",
      "Microsoft Office",
      "WordPress",
      "Google Ads & Analytics",
      "Canva",
      "Photoshop",
      "Premiere",
    ],
    languages: [
      { name: "Tiếng Việt", level: 100 },
      { name: "Tiếng Anh (TOEIC 735)", level: 65 },
    ],
    experiences: [
      {
        company: "Mobifone Đà Nẵng",
        role: "Chuyên viên Quản trị Kế hoạch - Tổng hợp",
        period: "10/2022 - 06/2026",
        groups: [
          {
            title: "Quản trị kế hoạch",
            items: [
              "Xây dựng kế hoạch kinh doanh theo tháng, quý và năm cho doanh thu, chi phí và chương trình hành động đối với các sản phẩm, dịch vụ giải pháp số.",
              "Theo dõi tiến độ thực hiện các chỉ tiêu doanh thu và BSC/KPIs của đơn vị.",
              "Tổng hợp số liệu, lập báo cáo định kỳ phục vụ công tác điều hành của Ban lãnh đạo.",
            ],
          },
          {
            title: "Theo dõi và đánh giá hiệu quả hoạt động",
            items: [
              "Theo dõi kết quả thực hiện BSC/KPIs theo từng nhóm sản phẩm và từng giai đoạn.",
              "Phân tích nguyên nhân chênh lệch giữa kế hoạch và kết quả thực hiện.",
              "Đề xuất giải pháp nâng cao hiệu quả kinh doanh và tối ưu nguồn lực.",
            ],
          },
          {
            title: "Điều phối triển khai công việc",
            items: [
              "Phối hợp với các phòng ban trong quá trình triển khai chuyển đổi số.",
              "Theo dõi tiến độ thực hiện, kịp thời phát hiện và xử lý các vướng mắc phát sinh.",
              "Đảm bảo các dự án được triển khai đúng kế hoạch và đáp ứng yêu cầu của khách hàng.",
            ],
          },
          {
            title: "Phân tích dữ liệu và báo cáo quản trị",
            items: [
              "Xây dựng bảng theo dõi doanh thu - chi phí và BSC/KPIs.",
              "Phân tích dữ liệu khách hàng và hiệu quả kinh doanh.",
              "Thiết kế báo cáo trực quan, hỗ trợ Ban lãnh đạo trong việc theo dõi và ra quyết định.",
            ],
          },
        ],
      },
      {
        company: "Quản lý phòng cho thuê - Đà Nẵng",
        role: "Quản lý vận hành",
        period: "07/2021 - nay",
        summary: "Quản lý 2 căn với 14 phòng cho thuê.",
        groups: [
          {
            title: "Vận hành kinh doanh",
            items: [
              "Quản lý vận hành, sổ sách, dòng tiền và chăm sóc khách thuê.",
              "Ứng dụng công cụ số để kiểm kê, báo cáo và tối ưu tỉ lệ lấp đầy phòng.",
              "Triển khai các kênh marketing online để tìm kiếm khách hàng.",
            ],
          },
        ],
      },
    ],
    achievements: [
      "Tham gia triển khai nhiều dự án chuyển đổi số cho doanh nghiệp và cơ quan nhà nước.",
      "Xây dựng hệ thống theo dõi doanh thu và KPI phục vụ công tác điều hành.",
      "Đề xuất các giải pháp góp phần nâng cao hiệu quả triển khai sản phẩm và tối ưu quy trình làm việc.",
      "Hoàn thành các chỉ tiêu doanh thu và nhiệm vụ được giao theo kế hoạch của đơn vị.",
    ],
    projects: [
      "Tham gia lập kế hoạch, điều phối triển khai, theo dõi tiến độ và đánh giá hiệu quả đối với các dự án: Hệ thống truyền thanh thông minh, Tham quan thực tế ảo VR360, Hóa đơn điện tử, Chữ ký số, Dịch vụ điện toán đám mây, Giải pháp Smart Travel, Loa Thần Tài.",
      "Tự xây dựng thương hiệu thức ăn cho mèo giai đoạn 2017-2019, triển khai marketing online, bán hàng và chăm sóc cộng đồng yêu thú cưng.",
    ],
    education: {
      school: "Đại học Tài chính - Marketing",
      period: "2014 - 2021",
      major: "Marketing tổng hợp",
      program: "Chương trình chất lượng cao với 100% môn học chuyên ngành bằng tiếng Anh.",
      thesis:
        "Đề tài nghiên cứu cá nhân: Các yếu tố ảnh hưởng đến ý định mua thức ăn thú cưng trực tuyến tại TP.HCM.",
    },
    certificates: [
      {
        name: "Ứng dụng CNTT cơ bản",
        date: "07/2019",
        issuer: "Trường Đại học Tài chính - Marketing",
      },
    ],
    qualities: [
      "Sáng tạo",
      "Chủ động",
      "Kỷ luật",
      "Trách nhiệm",
      "Làm việc nhóm",
      "Thích ứng nhanh",
      "Giao tiếp tốt",
    ],
  },
  en: {
    name: "Hứa Vương Duy Bình",
    title: "Planning Management, Analytics and Operations Coordination Specialist",
    shortTitle: "Planning management, data analysis and operations coordination",
    heroTagline: "Da Nang · Planning management · Data analysis",
    imageAlt: "Portrait of Hứa Vương Duy Bình",
    summary:
      "Planning management specialist with experience tracking and evaluating BSC/KPIs, analyzing data, coordinating digital transformation projects and building management reports. Able to work effectively across departments, monitor execution progress, analyze causes behind operational results and propose improvements that raise operating efficiency.",
    contact: {
      birthDate: "18 July 1996",
      gender: "Male",
      phone: "0905 107 377",
      email: "hyd.binh@gmail.com",
      address: "818/42 Tran Cao Van, Thanh Khe, Da Nang",
    },
    ui: {
      switchLabel: "Choose language",
      emailCta: "Email me",
      phoneCta: "Call",
      downloadCta: "Download CV",
      birthDate: "Date of birth",
      gender: "Gender",
      phone: "Phone",
      email: "Email",
      address: "Address",
      experienceEyebrow: "Experience",
      experienceTitle: "Tracking goals, coordinating execution, measuring results",
      experienceDescription:
        "Experience centered on business planning, BSC/KPI control, management reporting and hands-on operations.",
      skillsEyebrow: "Capabilities",
      skillsTitle: "Data-driven operations capability",
      skillsDescription:
        "A practical skill set spanning planning, analysis, reporting and cross-functional execution.",
      toolsTitle: "Tools",
      languagesTitle: "Languages",
      highlightsEyebrow: "Highlights",
      highlightsTitle: "Achievements and featured projects",
      achievementsTitle: "Key achievements",
      projectsTitle: "Featured projects",
      educationEyebrow: "Education",
      educationTitle: "Education and working qualities",
      majorLabel: "Major",
      issuerLabel: "Issued by",
      qualitiesTitle: "Personality & qualities",
      navHome: "Home",
      navContact: "Contact",
      navExperience: "Experience",
      navCapabilities: "Capabilities",
      navHighlights: "Highlights",
      navEducation: "Education",
    },
    stats: [
      { value: "10/2022", label: "Started planning management role" },
      { value: "14", label: "Rental rooms under management" },
      { value: "TOEIC 735", label: "English proficiency" },
    ],
    skills: [
      { name: "Planning management", level: 80 },
      { name: "Performance management", level: 70 },
      { name: "KPI tracking and evaluation", level: 60 },
      { name: "Work coordination", level: 60 },
      { name: "Project progress management", level: 75 },
      { name: "Data analysis", level: 70 },
      { name: "Management reporting", level: 80 },
      { name: "Workflow improvement", level: 90 },
    ],
    tools: [
      "Microsoft Excel",
      "PowerPoint",
      "Microsoft Office",
      "WordPress",
      "Google Ads & Analytics",
      "Canva",
      "Photoshop",
      "Premiere",
    ],
    languages: [
      { name: "Vietnamese", level: 100 },
      { name: "English (TOEIC 735)", level: 65 },
    ],
    experiences: [
      {
        company: "Mobifone Da Nang",
        role: "Planning Management and General Affairs Specialist",
        period: "10/2022 - 06/2026",
        groups: [
          {
            title: "Planning management",
            items: [
              "Built monthly, quarterly and annual business plans for revenue, costs and action programs across digital solution products and services.",
              "Tracked progress against revenue targets and unit-level BSC/KPIs.",
              "Consolidated data and prepared recurring reports for leadership operations.",
            ],
          },
          {
            title: "Performance tracking and evaluation",
            items: [
              "Monitored BSC/KPI results by product group and execution phase.",
              "Analyzed gaps between plan and actual performance.",
              "Proposed solutions to improve business efficiency and optimize resources.",
            ],
          },
          {
            title: "Work coordination",
            items: [
              "Coordinated with departments during digital transformation initiatives.",
              "Tracked implementation progress and resolved emerging blockers in time.",
              "Helped ensure projects were delivered according to plan and customer requirements.",
            ],
          },
          {
            title: "Data analysis and management reporting",
            items: [
              "Built revenue-cost and BSC/KPI tracking tables.",
              "Analyzed customer data and business performance.",
              "Designed visual reports supporting leadership monitoring and decision-making.",
            ],
          },
        ],
      },
      {
        company: "Rental Room Management - Da Nang",
        role: "Operations Manager",
        period: "07/2021 - present",
        summary: "Managed 2 properties with 14 rental rooms.",
        groups: [
          {
            title: "Business operations",
            items: [
              "Managed operations, records, cash flow and tenant care.",
              "Applied digital tools for inventory, reporting and occupancy optimization.",
              "Ran online marketing channels to acquire tenants.",
            ],
          },
        ],
      },
    ],
    achievements: [
      "Participated in multiple digital transformation projects for enterprises and public-sector organizations.",
      "Built revenue and KPI tracking systems supporting leadership operations.",
      "Proposed improvements that increased product rollout effectiveness and optimized workflows.",
      "Completed revenue targets and assigned duties according to unit plans.",
    ],
    projects: [
      "Joined planning, rollout coordination, progress tracking and effectiveness evaluation for projects including smart public broadcasting systems, VR360 virtual tours, e-invoices, digital signatures, cloud services, Smart Travel solutions and Loa Than Tai.",
      "Built a pet food brand from 2017 to 2019, covering online marketing, sales and community care for pet owners.",
    ],
    education: {
      school: "University of Finance - Marketing",
      period: "2014 - 2021",
      major: "General Marketing",
      program: "High-quality program with 100% of major courses taught in English.",
      thesis:
        "Individual research thesis: Factors influencing online purchase intention for pet food in Ho Chi Minh City.",
    },
    certificates: [
      {
        name: "Basic IT Application Certificate",
        date: "07/2019",
        issuer: "University of Finance - Marketing",
      },
    ],
    qualities: [
      "Creative",
      "Proactive",
      "Disciplined",
      "Responsible",
      "Team-oriented",
      "Fast-adapting",
      "Good communicator",
    ],
  },
} satisfies Record<Locale, ProfileContent>;
