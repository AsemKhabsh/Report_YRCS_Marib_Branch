// ================================================
// بيانات جميع المشاريع والأنشطة - 2025
// جمعية الهلال الأحمر اليمني - فرع مأرب
// ================================================

// ورقة 1: مشاريع الاستجابة
const projectsData = [
    {
        id: 1,
        name: "تقييم متعدد القطاعات للمتضررين من الأمطار والسيول",
        category: "تقييم",
        location: "مخيم السويداء",
        startDate: "2025-01-25",
        endDate: "2025-01-30",
        targetGroup: "المتضررين من الأمطار والسيول",
        donor: "الاتحاد الدولي",
        beneficiaries: 426
    },
    {
        id: 2,
        name: "تحقق من مستفيدي مواد إيوائية",
        category: "تحقق",
        location: "حوش الجامعة، بطحاء الميل، سائلة الميل",
        startDate: "2025-02-17",
        endDate: "2025-02-18",
        targetGroup: "النازحين",
        donor: "اللجنة الدولية",
        beneficiaries: 150
    },
    {
        id: 3,
        name: "توزيع 1500 سلة إيوائية",
        category: "إيواء",
        location: "حوش الزراعة - حي الشركة",
        startDate: "2025-02-24",
        endDate: "2025-02-27",
        targetGroup: "النازحين",
        donor: "اللجنة الدولية",
        beneficiaries: 1500
    },
    {
        id: 4,
        name: "جلسة تعريفية بمشروع مياه الخير",
        category: "جلسات نقاش",
        location: "مبنى الفرع",
        startDate: "2025-07-03",
        endDate: "2025-07-03",
        targetGroup: "المتطوعين",
        donor: "اللجنة الدولية",
        beneficiaries: 6
    },
    {
        id: 5,
        name: "تقييم ميداني لمشروع مياه الخير",
        category: "تقييم",
        location: "المطار - مدينة مأرب",
        startDate: "2025-07-06",
        endDate: "2025-07-10",
        targetGroup: "النازحين والمجتمع المضيف",
        donor: "اللجنة الدولية",
        beneficiaries: 6
    },
    {
        id: 6,
        name: "جلسة تعريفية بنشاط المسح النهائي لمشروع مياه الحرمل",
        category: "جلسات نقاش",
        location: "مبنى الفرع",
        startDate: "2025-07-10",
        endDate: "2025-07-10",
        targetGroup: "المتطوعين",
        donor: "اللجنة الدولية",
        beneficiaries: 6
    },
    {
        id: 7,
        name: "التقييم والمسح النهائي لمشروع مياه الحرمل",
        category: "تقييم",
        location: "مديرية الوادي - آل حرمل",
        startDate: "2025-07-14",
        endDate: "2025-07-17",
        targetGroup: "المجتمع المضيف",
        donor: "اللجنة الدولية",
        beneficiaries: 6
    },
    {
        id: 8,
        name: "جلسة تعريفية بمشروع تقييم رضا المستفيدين بمستشفى الحزمة",
        category: "جلسات نقاش",
        location: "مكتب اللجنة الدولية للصليب الأحمر",
        startDate: "2025-07-07",
        endDate: "2025-07-07",
        targetGroup: "المرضى",
        donor: "اللجنة الدولية",
        beneficiaries: 7
    },
    {
        id: 9,
        name: "التحقق من مستفيدي المساعدات النقدية",
        category: "تحقق",
        location: "الوادي والمدينة",
        startDate: "2025-09-20",
        endDate: "2025-09-28",
        targetGroup: "المتضررين من الأمطار والسيول",
        donor: "الصليب الأحمر النرويجي",
        beneficiaries: 1000
    },
    {
        id: 10,
        name: "التحقق من مستفيدي المشاريع الزراعية",
        category: "تحقق",
        location: "مديريتي المدينة والوادي",
        startDate: "2025-09-21",
        endDate: "2025-09-29",
        targetGroup: "المزارعين",
        donor: "اللجنة الدولية",
        beneficiaries: 650
    },
    {
        id: 11,
        name: "صرف مساعدات نقدية",
        category: "مساعدات نقدية",
        location: "مديريتي المدينة والوادي",
        startDate: "2025-10-06",
        endDate: "2025-10-08",
        targetGroup: "المتضررين من الأمطار والسيول",
        donor: "الصليب الأحمر النرويجي",
        beneficiaries: 1000
    },
    {
        id: 12,
        name: "توزيع شتلات الطماطم ودرنات البطاطس",
        category: "زراعي",
        location: "مديريتي المدينة والوادي",
        startDate: "2025-10-06",
        endDate: "2025-10-08",
        targetGroup: "المزارعين",
        donor: "اللجنة الدولية",
        beneficiaries: 400
    },
    {
        id: 13,
        name: "توزيع بذور القمح",
        category: "زراعي",
        location: "مديرية المدينة",
        startDate: "2025-10-12",
        endDate: "2025-10-15",
        targetGroup: "المزارعين",
        donor: "اللجنة الدولية",
        beneficiaries: 250
    },
    {
        id: 14,
        name: "توزيع درنات البطاطس",
        category: "زراعي",
        location: "مديريتي المدينة والوادي",
        startDate: "2025-10-20",
        endDate: "2025-10-22",
        targetGroup: "المزارعين",
        donor: "اللجنة الدولية",
        beneficiaries: 200
    },
    {
        id: 15,
        name: "تقييم المبادرة المجتمعية",
        category: "تقييم",
        location: "مديرية المدينة (مدرسة بلقيس - مدرسة الشوكاني)",
        startDate: "2025-10-22",
        endDate: "2025-10-23",
        targetGroup: "المجتمع المحلي",
        donor: "اللجنة الدولية",
        beneficiaries: 25
    },
    {
        id: 16,
        name: "توزيع 1100 سلة إيوائية",
        category: "إيواء",
        location: "مدرسة إقرأ - شارح صرواح",
        startDate: "2025-10-26",
        endDate: "2025-10-28",
        targetGroup: "المتضررين من الأمطار والسيول",
        donor: "اللجنة الدولية",
        beneficiaries: 1100
    },
    {
        id: 17,
        name: "تقييم أولي للأضرار الناتجة عن المنخفض الجوي",
        category: "تقييم",
        location: "مخيمات المدينة",
        startDate: "2025-09-17",
        endDate: "2025-09-18",
        targetGroup: "المتضررين من الأمطار والسيول",
        donor: "اللجنة الدولية",
        beneficiaries: 825
    },
    {
        id: 18,
        name: "توزيع شتلات الطماطم (المرحلة الثانية)",
        category: "زراعي",
        location: "مديريتي المدينة والوادي",
        startDate: "2025-11-11",
        endDate: "2025-11-13",
        targetGroup: "المزارعين",
        donor: "اللجنة الدولية",
        beneficiaries: 100
    },
    {
        id: 19,
        name: "توزيع 500 حقيبة إيوائية للمتضررين",
        category: "إيواء",
        location: "مخزن الفرع",
        startDate: "2025-12-28",
        endDate: "2025-12-30",
        targetGroup: "المتضررين من الأمطار والسيول",
        donor: "الصليب الأحمر الألماني",
        beneficiaries: 500
    }
];

// ورقة 2: التدريب
const trainingData = [
    {
        id: 1,
        name: "دورة في أدوات تنفيذ برامج التحويلات النقدية والقسائم",
        location: "مبنى الفرع",
        startDate: "2025-07-02",
        endDate: "2025-07-08",
        targetGroup: "المتطوعين",
        donor: "اللجنة الدولية",
        beneficiaries: 5
    },
    {
        id: 2,
        name: "تدريب إسعافات أولية لـ 100 من مكاتب السلطة المحلية",
        location: "مبنى الفرع",
        startDate: "2025-08-30",
        endDate: "2025-09-04",
        targetGroup: "مكاتب السلطة المحلية",
        donor: "الصليب الأحمر النرويجي",
        beneficiaries: 100
    },
    {
        id: 3,
        name: "دورة تقييم المبادرة المجتمعية",
        location: "مبنى الفرع",
        startDate: "2025-09-24",
        endDate: "2025-09-24",
        targetGroup: "المتطوعين",
        donor: "اللجنة الدولية",
        beneficiaries: 6
    },
    {
        id: 4,
        name: "ورشة عمل إعداد مقترحات المبادرات والرفع بالتقارير",
        location: "مبنى الفرع",
        startDate: "2025-11-17",
        endDate: "2025-11-18",
        targetGroup: "المتطوعين",
        donor: "اللجنة الدولية",
        beneficiaries: 10
    },
    {
        id: 5,
        name: "دورة تدريبية في أدوات التقييم",
        location: "مبنى الفرع",
        startDate: "2025-07-24",
        endDate: "2025-07-25",
        targetGroup: "المتطوعين",
        donor: "اللجنة الدولية",
        beneficiaries: 10
    }
];

// ورقة 3: الفعاليات
const eventsData = [
    {
        id: 1,
        name: "جلسة تعريفية بمشروع التحضير للمؤتمر الدولي لعائلات المفقودين",
        category: "إعادة الروابط",
        location: "مكتب اللجنة الدولية",
        startDate: "2025-11-10",
        endDate: "2025-11-10",
        targetGroup: "المتطوعين",
        donor: "اللجنة الدولية",
        volunteers: 2
    },
    {
        id: 2,
        name: "مشاركة في مشروع التحضير للمؤتمر الدولي لعائلات المفقودين",
        category: "إعادة الروابط",
        location: "مكتب اللجنة الدولية",
        startDate: "2025-11-11",
        endDate: "2025-11-13",
        targetGroup: "عائلات المفقودين",
        donor: "اللجنة الدولية",
        volunteers: 3
    },
    {
        id: 3,
        name: "خدمات إسعافية لماراثون الفروسية بمأرب",
        category: "خدمات إسعافية",
        location: "حوش المطار - مأرب",
        startDate: "2025-10-07",
        endDate: "2025-10-07",
        targetGroup: "اللاعبين",
        donor: "ذاتي",
        volunteers: 4
    },
    {
        id: 4,
        name: "فعالية ذكرى التأسيس",
        category: "فعاليات",
        location: "قاعة لاري",
        startDate: "2025-03-19",
        endDate: "2025-03-19",
        targetGroup: "المتطوعين",
        donor: "ذاتي",
        volunteers: 150
    },
    {
        id: 5,
        name: "فعالية افتتاح مخزن جمعية الهلال الأحمر اليمني فرع مأرب",
        category: "فعاليات",
        location: "مخزن الفرع",
        startDate: "2025-05-18",
        endDate: "2025-05-18",
        targetGroup: "الفرع",
        donor: "اللجنة الدولية",
        volunteers: 30
    }
];

// ورقة 4: إعادة الروابط (محدث)
const rflData = {
    // التعريف بأنشطة الجمعية
    awareness: {
        women: 167,
        men: 696,
        children: 297,
        hotline: 141,
        total: 1301
    },
    // أنشطة أخرى
    other: [
        { name: "بلاغات عن مفقودين", count: 9 },
        { name: "رسائل موزعة", count: 1 },
        { name: "إقامة نشاط اليوم العالمي للمفقودين", count: 20 },
        { name: "ورشة عمل للصحفيين للتعريف بالقانون الدولي الإنساني", count: 25 },
        { name: "المشاركة في تسليم جثث للجهات المختصة", count: 10 }
    ],
    totalOther: 65
};

// ورقة 5: التوعية بمخاطر الألغام (محدث)
const minesAwarenessData = [
    {
        month: "سبتمبر",
        location: "مخيمات المدينة والوادي",
        males: 1633,
        females: 1565,
        total: 3198
    },
    {
        month: "نوفمبر",
        location: "مديريتي المدينة والوادي",
        males: 2205,
        females: 2269,
        total: 4474
    },
    {
        month: "ديسمبر",
        location: "مديريتي المدينة والوادي",
        males: 4980,
        females: 4923,
        total: 9903
    }
];
const totalMinesAwareness = 17575;

// ورقة 6: الإحالة (نقل سيارات الإسعاف)
const ambulanceData = {
    months: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    alFalaj: [25, 23, 25, 24, 26, 27, 29, 33, 30, 32, 30, 32],
    alKasara: [26, 25, 27, 27, 29, 28, 31, 32, 29, 30, 29, 30],
    sayoun: [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    alAtir: [0, 0, 0, 0, 0, 0, 0, 0, 10, 16, 18, 18],
    totals: { alFalaj: 336, alKasara: 343, sayoun: 6, alAtir: 62, total: 747 }
};

// ================================================
// حساب الإحصائيات الإجمالية
// ================================================

const totalStats = {
    projects: projectsData.length,
    training: trainingData.length,
    events: eventsData.length,
    projectBeneficiaries: projectsData.reduce((sum, p) => sum + p.beneficiaries, 0),
    trainingBeneficiaries: trainingData.reduce((sum, t) => sum + t.beneficiaries, 0),
    eventVolunteers: eventsData.reduce((sum, e) => sum + e.volunteers, 0),
    minesAwareness: totalMinesAwareness,
    ambulanceReferrals: ambulanceData.totals.total,
    rflBeneficiaries: rflData.awareness.total + rflData.totalOther,
    initiativeBeneficiaries: 500, // Added from initiative
    get totalBeneficiaries() {
        return this.projectBeneficiaries + this.trainingBeneficiaries + this.minesAwareness + this.ambulanceReferrals + this.rflBeneficiaries + this.initiativeBeneficiaries;
    }
};

// ================================================
// دوال مساعدة
// ================================================

function formatDate(dateStr) {
    if (!dateStr) return '-';
    const date = new Date(dateStr);
    return date.toLocaleDateString('ar-YE', { year: 'numeric', month: 'short', day: 'numeric' });
}

function formatNumber(num) {
    return num.toLocaleString('ar-YE');
}

function getCategoryColor(category) {
    const colors = {
        'تقييم': '#4ECDC4',
        'إيواء': '#E31837',
        'زراعي': '#4CAF50',
        'جلسات نقاش': '#9B59B6',
        'تحقق': '#3498DB',
        'مساعدات نقدية': '#F39C12',
        'توعية': '#1ABC9C',
        'تدريب': '#FF6B6B',
        'إعادة الروابط': '#845EC2',
        'فعاليات': '#FF9671',
        'خدمات إسعافية': '#00C9A7'
    };
    return colors[category] || '#6C757D';
}

// ================================================
// ملء جدول المشاريع
// ================================================

function populateTable() {
    const tbody = document.getElementById('projectsTableBody');
    if (!tbody) return;

    tbody.innerHTML = projectsData.map(project => `
        <tr>
            <td>${project.id}</td>
            <td>${project.name}</td>
            <td><span class="category-badge" style="background: ${getCategoryColor(project.category)}">${project.category}</span></td>
            <td>${project.location}</td>
            <td>${formatDate(project.startDate)} - ${formatDate(project.endDate)}</td>
            <td>${project.donor}</td>
            <td><strong>${formatNumber(project.beneficiaries)}</strong></td>
        </tr>
    `).join('');
}

// ================================================
// ملء جدول التدريب
// ================================================

function populateTrainingTable() {
    const tbody = document.getElementById('trainingTableBody');
    if (!tbody) return;

    tbody.innerHTML = trainingData.map(training => `
        <tr>
            <td>${training.id}</td>
            <td>${training.name}</td>
            <td>${training.location}</td>
            <td>${formatDate(training.startDate)} - ${formatDate(training.endDate)}</td>
            <td>${training.targetGroup}</td>
            <td>${training.donor}</td>
            <td><strong>${formatNumber(training.beneficiaries)}</strong></td>
        </tr>
    `).join('');
}

// ================================================
// ملء جدول التوعية بالألغام
// ================================================

function populateMinesTable() {
    const tbody = document.getElementById('minesTableBody');
    if (!tbody) return;

    tbody.innerHTML = minesAwarenessData.map((data, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${data.month}</td>
            <td>${data.location}</td>
            <td>${formatNumber(data.males)}</td>
            <td>${formatNumber(data.females)}</td>
            <td><strong>${formatNumber(data.total)}</strong></td>
        </tr>
    `).join('');
}

// ================================================
// ملء جدول الإحالة
// ================================================

function populateAmbulanceTable() {
    const tbody = document.getElementById('ambulanceTableBody');
    if (!tbody) return;

    let rows = '';
    ambulanceData.months.forEach((month, i) => {
        const total = ambulanceData.alFalaj[i] + ambulanceData.alKasara[i] + ambulanceData.sayoun[i] + ambulanceData.alAtir[i];
        rows += `
            <tr>
                <td>${month}</td>
                <td>${ambulanceData.alFalaj[i]}</td>
                <td>${ambulanceData.alKasara[i]}</td>
                <td>${ambulanceData.sayoun[i]}</td>
                <td>${ambulanceData.alAtir[i]}</td>
                <td><strong>${total}</strong></td>
            </tr>
        `;
    });

    tbody.innerHTML = rows;
}

// ================================================
// ملء جدول الفعاليات
// ================================================

function populateEventsTable() {
    const tbody = document.getElementById('eventsTableBody');
    if (!tbody) return;

    tbody.innerHTML = eventsData.map(event => `
        <tr>
            <td>${event.id}</td>
            <td>${event.name}</td>
            <td><span class="category-badge" style="background: ${getCategoryColor(event.category)}">${event.category}</span></td>
            <td>${event.location}</td>
            <td>${formatDate(event.startDate)}</td>
            <td>${event.donor}</td>
            <td><strong>${formatNumber(event.volunteers)}</strong></td>
        </tr>
    `).join('');
}

// ================================================
// ملء جدول إعادة الروابط
// ================================================

function populateRFLTable() {
    const tbody = document.getElementById('rflTableBody');
    if (!tbody) return;

    let rows = `
        <tr>
            <td>1</td>
            <td>التعريف بأنشطة الجمعية (نساء)</td>
            <td><strong>${formatNumber(rflData.awareness.women)}</strong></td>
        </tr>
        <tr>
            <td>2</td>
            <td>التعريف بأنشطة الجمعية (رجال)</td>
            <td><strong>${formatNumber(rflData.awareness.men)}</strong></td>
        </tr>
        <tr>
            <td>3</td>
            <td>التعريف بأنشطة الجمعية (أطفال)</td>
            <td><strong>${formatNumber(rflData.awareness.children)}</strong></td>
        </tr>
        <tr>
            <td>4</td>
            <td>مشاركة الخط الساخن</td>
            <td><strong>${formatNumber(rflData.awareness.hotline)}</strong></td>
        </tr>
    `;

    rflData.other.forEach((item, i) => {
        rows += `
            <tr>
                <td>${i + 5}</td>
                <td>${item.name}</td>
                <td><strong>${formatNumber(item.count)}</strong></td>
            </tr>
        `;
    });

    tbody.innerHTML = rows;
}

// ================================================
// أنيميشن الأرقام
// ================================================

function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const counter = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(counter);
            }
            stat.textContent = formatNumber(Math.floor(current));
        }, 16);
    });
}

// ================================================
// الرسوم البيانية
// ================================================

function createCategoryChart() {
    const ctx = document.getElementById('categoryChart');
    if (!ctx) return;

    const categoryData = {};
    projectsData.forEach(p => {
        categoryData[p.category] = (categoryData[p.category] || 0) + 1;
    });

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(categoryData),
            datasets: [{
                data: Object.values(categoryData),
                backgroundColor: [
                    '#4ECDC4', '#E31837', '#4CAF50', '#9B59B6',
                    '#3498DB', '#F39C12', '#1ABC9C'
                ],
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: { family: 'Tajawal', size: 12 },
                        padding: 20,
                        usePointStyle: true
                    }
                }
            },
            cutout: '60%'
        }
    });
}

function createDonorChart() {
    const ctx = document.getElementById('donorChart');
    if (!ctx) return;

    const donorData = {};
    projectsData.forEach(p => {
        donorData[p.donor] = (donorData[p.donor] || 0) + p.beneficiaries;
    });

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(donorData),
            datasets: [{
                label: 'عدد المستفيدين',
                data: Object.values(donorData),
                backgroundColor: [
                    'rgba(227, 24, 55, 0.8)',
                    'rgba(52, 152, 219, 0.8)',
                    'rgba(46, 204, 113, 0.8)',
                    'rgba(155, 89, 182, 0.8)'
                ],
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: { legend: { display: false } },
            scales: {
                x: {
                    beginAtZero: true,
                    grid: { display: false },
                    ticks: { font: { family: 'Tajawal' } }
                },
                y: {
                    grid: { display: false },
                    ticks: { font: { family: 'Tajawal', size: 11 } }
                }
            }
        }
    });
}

function createActivitiesChart() {
    const ctx = document.getElementById('activitiesChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['مشاريع الاستجابة', 'التدريب', 'التوعية بالألغام', 'الإحالة بالإسعاف', 'إعادة الروابط'],
            datasets: [{
                data: [
                    totalStats.projectBeneficiaries,
                    totalStats.trainingBeneficiaries,
                    totalStats.minesAwareness,
                    totalStats.ambulanceReferrals,
                    totalStats.rflBeneficiaries
                ],
                backgroundColor: [
                    '#E31837', '#FF6B6B', '#4ECDC4', '#00C9A7', '#845EC2'
                ],
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: { family: 'Tajawal', size: 11 },
                        padding: 15,
                        usePointStyle: true
                    }
                }
            },
            cutout: '55%'
        }
    });
}

function createAmbulanceChart() {
    const ctx = document.getElementById('ambulanceChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ambulanceData.months,
            datasets: [
                {
                    label: 'الفلج',
                    data: ambulanceData.alFalaj,
                    borderColor: '#E31837',
                    backgroundColor: 'rgba(227, 24, 55, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'الكسارة',
                    data: ambulanceData.alKasara,
                    borderColor: '#3498DB',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'مستشفى العطير',
                    data: ambulanceData.alAtir,
                    borderColor: '#2ECC71',
                    backgroundColor: 'rgba(46, 204, 113, 0.1)',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { font: { family: 'Tajawal', size: 11 } }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { font: { family: 'Tajawal', size: 10 } }
                },
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(0,0,0,0.05)' },
                    ticks: { font: { family: 'Tajawal' } }
                }
            }
        }
    });
}

// ================================================
// وظائف الطباعة والتحميل
// ================================================

function downloadPDF() {
    const printContent = document.documentElement.outerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printContent);
    printWindow.document.close();

    const style = printWindow.document.createElement('style');
    style.textContent = `
        @media print {
            .header-actions { display: none !important; }
            body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
        }
    `;
    printWindow.document.head.appendChild(style);

    setTimeout(() => {
        printWindow.print();
        printWindow.close();
    }, 500);
}

// ================================================
// أنيميشن التمرير
// ================================================

function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.stat-card, .chart-card, .category-card, .donor-card, .gallery-item, .contact-card, .activity-section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// ================================================
// التهيئة
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    // تحديث الإحصائيات الرئيسية
    const totalBeneficiariesEl = document.querySelector('[data-count="7912"]');
    if (totalBeneficiariesEl) {
        totalBeneficiariesEl.setAttribute('data-count', totalStats.totalBeneficiaries);
    }

    // ملء الجداول
    populateTable();
    populateTrainingTable();
    populateMinesTable();
    populateAmbulanceTable();
    populateEventsTable();
    populateRFLTable();

    // أنيميشن الأرقام
    animateNumbers();

    // إنشاء الرسوم البيانية
    createCategoryChart();
    createDonorChart();
    createActivitiesChart();
    createAmbulanceChart();

    // إعداد أنيميشن التمرير
    setupScrollAnimations();
});
