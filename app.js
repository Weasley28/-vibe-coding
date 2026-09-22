const appScreen = document.querySelector(".app-screen");
const monthToggle = document.querySelector(".month-toggle");
const monthPopover = document.querySelector(".month-popover");
const monthOptions = document.querySelectorAll(".month-option");
const dateStrip = document.querySelector(".date-strip");
const selectedDateText = document.querySelector(".selected-date-text");
const selectedDateMode = document.querySelector(".selected-date-mode");
const dailyIncomeTotal = document.querySelector(".daily-income-total");
const dailyExpenseTotal = document.querySelector(".daily-expense-total");
const dailyBalanceTotal = document.querySelector(".daily-balance-total");
const ledgerList = document.querySelector(".ledger-list");
const toast = document.querySelector(".interaction-toast");
const recordButton = document.querySelector(".record-button");
const quickTabs = document.querySelectorAll(".quick-tab");
const dataView = document.querySelector(".data-view");
const assetsView = document.querySelector(".assets-view");
const currencySwitches = document.querySelectorAll(".currency-switch");
const currencyCodes = document.querySelectorAll(".currency-code");
const currencyPopovers = document.querySelectorAll(".currency-popover");
const currencyOptions = document.querySelectorAll(".currency-option");
const assetMonthNumber = document.querySelector(".asset-month-number");
const assetBudgetMonth = document.querySelector(".asset-budget-month");
const assetMonthIncome = document.querySelector(".asset-month-income");
const assetMonthExpense = document.querySelector(".asset-month-expense");
const assetMonthBalance = document.querySelector(".asset-month-balance");
const budgetButton = document.querySelector(".budget-button");
const budgetRing = document.querySelector(".budget-ring");
const budgetPercent = document.querySelector(".budget-percent");
const budgetRemaining = document.querySelector(".budget-remaining");
const budgetTotal = document.querySelector(".budget-total");
const budgetSpent = document.querySelector(".budget-spent");
const assetNet = document.querySelector(".asset-net");
const assetTotal = document.querySelector(".asset-total");
const assetLiability = document.querySelector(".asset-liability");
const backupRecordCount = document.querySelector(".backup-record-count");
const backupLocalStatus = document.querySelector(".backup-local-status");
const backupMessage = document.querySelector(".backup-message");
const backupExportButton = document.querySelector(".backup-export");
const backupImportButton = document.querySelector(".backup-import");
const backupFileInput = document.querySelector(".backup-file-input");
const flowOptions = document.querySelectorAll(".flow-option");
const periodOptions = document.querySelectorAll(".period-option");
const cycleTitle = document.querySelector(".cycle-title");
const cycleSubtitle = document.querySelector(".cycle-subtitle");
const cycleAverage = document.querySelector(".cycle-average");
const cycleTotal = document.querySelector(".cycle-total");
const trendChart = document.querySelector(".trend-chart");
const rankTitle = document.querySelector(".rank-title");
const rankPeriod = document.querySelector(".rank-period");
const rankList = document.querySelector(".rank-list");
const reportButton = document.querySelector(".report-button");
const reportBackdrop = document.querySelector(".report-backdrop");
const reportDialog = document.querySelector(".report-dialog");
const reportTitle = document.querySelector("#report-title");
const reportBody = document.querySelector(".report-body");
const reportClose = document.querySelector(".report-close");
const monthDetailButton = document.querySelector(".month-detail-button");
const monthDetailBackdrop = document.querySelector(".month-detail-backdrop");
const monthDetailSheet = document.querySelector(".month-detail-sheet");
const monthDetailTitle = document.querySelector("#month-detail-title");
const monthDetailKicker = document.querySelector(".month-detail-kicker");
const monthDetailClose = document.querySelector(".month-detail-close");
const monthDetailPrevious = document.querySelector(".month-detail-previous");
const monthDetailNext = document.querySelector(".month-detail-next");
const monthDetailCurrent = document.querySelector(".month-detail-current");
const monthDetailViewOptions = document.querySelectorAll(".month-detail-view-option");
const monthCalendarView = document.querySelector(".month-calendar-view");
const monthFlowView = document.querySelector(".month-flow-view");
const monthFlowList = document.querySelector(".month-flow-list");
const monthDetailGrid = document.querySelector(".month-detail-grid");
const monthDetailIncome = document.querySelector(".month-detail-income");
const monthDetailExpense = document.querySelector(".month-detail-expense");
const monthDetailBalance = document.querySelector(".month-detail-balance");
const sheet = document.querySelector(".entry-sheet");
const sheetBackdrop = document.querySelector(".sheet-backdrop");
const sheetClose = document.querySelector(".sheet-close");
const entryTitle = document.querySelector("#entry-title");
const entryDateContext = document.querySelector(".entry-date-context");
const entryForm = document.querySelector(".entry-form");
const entryFlowOptions = document.querySelectorAll(".entry-flow-option");
const entryCategoryGrid = document.querySelector(".entry-category-grid");
const entryProjectOptions = document.querySelector(".entry-project-options");
const entryProjectHint = document.querySelector(".entry-project-hint");
const createProjectButton = document.querySelector(".create-project-button");
const inputLabel = document.querySelector(".input-label");
const expenseInput = document.querySelector(".expense-input");
const entryPendingToggle = document.querySelector(".entry-pending-toggle");
const parseButton = document.querySelector(".parse-button");
const entryQuantityDecrease = document.querySelector(".entry-quantity-decrease");
const entryQuantityIncrease = document.querySelector(".entry-quantity-increase");
const entryQuantityValue = document.querySelector(".entry-quantity-value");
const entryQuantityHint = document.querySelector(".entry-quantity-hint");
const formError = document.querySelector(".form-error");
const quickExamples = document.querySelectorAll(".quick-examples button");
const confirmCard = document.querySelector(".confirm-card");
const confirmNote = document.querySelector(".confirm-note");
const confirmCategory = document.querySelector(".confirm-category");
const confirmAmount = document.querySelector(".confirm-amount");
const confirmCalculation = document.querySelector(".confirm-calculation");
const confirmProject = document.querySelector(".confirm-project");
const confirmTime = document.querySelector(".confirm-time");
const editResult = document.querySelector(".edit-result");
const saveResult = document.querySelector(".save-result");
const withdrawBackdrop = document.querySelector(".withdraw-backdrop");
const withdrawDialog = document.querySelector(".withdraw-dialog");
const withdrawTitle = document.querySelector("#withdraw-title");
const withdrawSummary = document.querySelector(".withdraw-summary");
const withdrawCancel = document.querySelector(".withdraw-cancel");
const withdrawConfirm = document.querySelector(".withdraw-confirm");
const pendingAmountBackdrop = document.querySelector(".pending-amount-backdrop");
const pendingAmountDialog = document.querySelector(".pending-amount-dialog");
const pendingAmountTitle = document.querySelector("#pending-amount-title");
const pendingAmountSummary = document.querySelector(".pending-amount-summary");
const pendingAmountCurrency = document.querySelector(".pending-amount-currency");
const pendingAmountInput = document.querySelector(".pending-amount-input");
const pendingAmountError = document.querySelector(".pending-amount-error");
const pendingAmountCancel = document.querySelector(".pending-amount-cancel");
const pendingAmountSave = document.querySelector(".pending-amount-save");
const pendingAmountRemove = document.querySelector(".pending-amount-remove");
const projectStatusSpace = document.querySelector(".project-status-space");
const projectStatusList = document.querySelector(".project-status-list");
const projectEditorBackdrop = document.querySelector(".project-editor-backdrop");
const projectEditorDialog = document.querySelector(".project-editor-dialog");
const projectEditorClose = document.querySelector(".project-editor-close");
const projectEditorForm = document.querySelector(".project-editor-form");
const projectNameInput = document.querySelector(".project-name-input");
const projectStartInput = document.querySelector(".project-start-input");
const projectEndInput = document.querySelector(".project-end-input");
const projectBudgetInput = document.querySelector(".project-budget-input");
const projectEditorCurrency = document.querySelector(".project-editor-currency");
const projectEditorError = document.querySelector(".project-editor-error");
const projectDetailBackdrop = document.querySelector(".project-detail-backdrop");
const projectDetailDialog = document.querySelector(".project-detail-dialog");
const projectDetailClose = document.querySelector(".project-detail-close");
const projectDetailTitle = document.querySelector("#project-detail-title");
const projectDetailStatus = document.querySelector(".project-detail-status");
const projectDetailPeriod = document.querySelector(".project-detail-period");
const projectDetailProgress = document.querySelector(".project-detail-progress span");
const projectDetailExpense = document.querySelector(".project-detail-expense");
const projectDetailBudget = document.querySelector(".project-detail-budget");
const projectDetailRemaining = document.querySelector(".project-detail-remaining");
const projectDetailCount = document.querySelector(".project-detail-count");
const projectDetailRecords = document.querySelector(".project-detail-records");
const projectDetailWithdraw = document.querySelector(".project-detail-withdraw");
const hasMonthDetail =
  Boolean(monthDetailButton) &&
  Boolean(monthDetailBackdrop) &&
  Boolean(monthDetailSheet) &&
  Boolean(monthDetailTitle) &&
  Boolean(monthDetailKicker) &&
  Boolean(monthDetailClose) &&
  Boolean(monthDetailPrevious) &&
  Boolean(monthDetailNext) &&
  Boolean(monthDetailCurrent) &&
  monthDetailViewOptions.length === 2 &&
  Boolean(monthCalendarView) &&
  Boolean(monthFlowView) &&
  Boolean(monthFlowList) &&
  Boolean(monthDetailGrid) &&
  Boolean(monthDetailIncome) &&
  Boolean(monthDetailExpense) &&
  Boolean(monthDetailBalance);

const storageKey = "bookkeeping-records";
const currencyStorageKey = "bookkeeping-currency";
const budgetStorageKey = "bookkeeping-monthly-budgets";
const projectStorageKey = "bookkeeping-projects";
const noSpendStorageKey = "bookkeeping-no-spend-days";
const backupVersion = 2;
const dayNames = ["日", "一", "二", "三", "四", "五", "六"];
const today = startOfDay(new Date());
const flowLabels = {
  expense: "支出",
  income: "收入",
};
const periodLabels = {
  week: "本周",
  month: "本月",
  year: "本年",
};
const currencyProfiles = {
  CNY: { name: "人民币", symbol: "¥", decimals: 2 },
  USD: { name: "美元", symbol: "$", decimals: 2 },
  EUR: { name: "欧元", symbol: "€", decimals: 2 },
  JPY: { name: "日元", symbol: "¥", decimals: 0 },
  HKD: { name: "港币", symbol: "HK$", decimals: 2 },
  GBP: { name: "英镑", symbol: "£", decimals: 2 },
  AUD: { name: "澳元", symbol: "A$", decimals: 2 },
  CAD: { name: "加元", symbol: "C$", decimals: 2 },
  SGD: { name: "新加坡元", symbol: "S$", decimals: 2 },
  KRW: { name: "韩元", symbol: "₩", decimals: 0 },
};
const projectColors = ["#6f9faf", "#7f91b5", "#6d9f96", "#a1849a", "#9a8f68"];
const categoryColors = {
  餐饮: "#8fb9c6",
  交通: "#6f8fa8",
  购物: "#7da69d",
  娱乐: "#9195b7",
  医疗: "#b28d96",
  工资: "#6d9f96",
  奖金: "#95a887",
  兼职: "#729eaf",
  红包: "#aa8794",
  理财: "#7f8fb0",
  其他: "#87949e",
};
const expenseCategories = [
  {
    name: "餐饮",
    icon: "🍜",
    keywords: [
      "饭",
      "餐",
      "早餐",
      "午餐",
      "晚餐",
      "夜宵",
      "宵夜",
      "外卖",
      "咖啡",
      "奶茶",
      "火锅",
      "海底捞",
      "淀粉肠",
      "烤肠",
      "小吃",
      "烧烤",
      "串串",
      "炸鸡",
      "汉堡",
      "披萨",
      "麻辣烫",
      "螺蛳粉",
      "酸辣粉",
      "米线",
      "米粉",
      "拉面",
      "牛肉面",
      "炒面",
      "拌面",
      "包子",
      "饺子",
      "馄饨",
      "粥",
      "甜品",
      "蛋糕",
      "面包",
      "零食",
      "水果",
      "饮料",
      "可乐",
      "茶饮",
      "瑞幸",
      "星巴克",
      "麦当劳",
      "肯德基",
      "kfc",
    ],
  },
  { name: "交通", icon: "🚗", keywords: ["打车", "地铁", "公交", "停车", "加油", "高铁", "机票"] },
  { name: "购物", icon: "🛒", keywords: ["超市", "日用品", "衣服", "鞋", "淘宝", "京东", "购物"] },
  { name: "娱乐", icon: "🎮", keywords: ["电影", "游戏", "演出", "会员", "酒吧"] },
  { name: "医疗", icon: "💊", keywords: ["药", "医院", "门诊", "体检"] },
];
const incomeCategories = [
  { name: "工资", icon: "💼", keywords: ["工资", "薪水", "薪资", "发薪", "月薪"] },
  { name: "奖金", icon: "🏆", keywords: ["奖金", "绩效", "提成", "年终奖"] },
  { name: "兼职", icon: "🧾", keywords: ["兼职", "外快", "稿费", "项目", "报酬"] },
  { name: "红包", icon: "🧧", keywords: ["红包", "转账", "礼金"] },
  { name: "理财", icon: "📈", keywords: ["利息", "理财", "基金", "股票", "分红"] },
];
const quickExampleSets = {
  expense: [
    { label: "早餐 12", value: "早餐 12", category: "餐饮" },
    { label: "地铁 2.9×2", value: "地铁 2.9*2", category: "交通" },
    { label: "日用品 156", value: "超市日用品 156", category: "购物" },
  ],
  income: [
    { label: "工资 5000", value: "工资 5000", category: "工资" },
    { label: "奖金 800", value: "奖金 800", category: "奖金" },
    { label: "红包 200", value: "红包 200", category: "红包" },
  ],
};

let parsedExpense = null;
let selectedDateKey = toDateKey(today);
let toastTimer = 0;
let isDraggingDates = false;
let dragStartX = 0;
let dragStartScroll = 0;
let dragDistance = 0;
let dateTapCandidate = null;
let suppressDateClick = false;
let memoryRecords = [];
let storageAvailable = true;
let pendingWithdrawId = null;
let pendingProjectWithdrawId = null;
let activeTab = "明细";
let selectedFlow = "expense";
let selectedEntryFlow = "expense";
let selectedEntryCategory = "";
let selectedEntryProjectId = "";
let selectedEntryQuantity = 1;
let isPendingEntry = false;
let activePendingRecordId = null;
let selectedPeriod = "week";
let selectedCurrency = readSelectedCurrency();
let activeProjectDetailId = "";
let monthDetailViewDate = new Date(today.getFullYear(), today.getMonth(), 1);
let monthDetailMode = "calendar";

function updatePreviewScale() {
  const isPhoneViewport = window.matchMedia("(max-width: 520px)").matches;
  if (isPhoneViewport) {
    document.documentElement.style.setProperty("--preview-scale", "1");
    return;
  }

  const scale = Math.min(1, (window.innerWidth - 24) / 489, (window.innerHeight - 36) / 1000);
  document.documentElement.style.setProperty("--preview-scale", String(Math.max(scale, 0.44)));
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return startOfDay(next);
}

function toDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function fromDateKey(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function isSameMonth(date, year, month) {
  return date.getFullYear() === year && date.getMonth() === month;
}

function formatMonth(date) {
  return `${date.getFullYear()}年${date.getMonth() + 1}月`;
}

function formatWeekday(date) {
  return `星期${dayNames[date.getDay()]}`;
}

function formatDay(date) {
  return `${date.getDate()}号`;
}

function formatDateLabel(date) {
  return `${formatDay(date)} ${formatWeekday(date)}`;
}

function formatMonthDay(date) {
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}

function formatEntryDate(date) {
  return `${formatMonthDay(date)} ${formatWeekday(date)}`;
}

function formatMoney(amount) {
  const sign = amount < 0 ? "-" : "";
  const absoluteAmount = Math.abs(amount);

  return `${sign}${absoluteAmount.toLocaleString("zh-CN", {
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  })}`;
}

function formatRecordMoney(amount, flow = "expense") {
  const money = formatMoney(amount);
  return flow === "income" ? `+${money}` : money;
}

function formatBalanceMoney(amount) {
  if (amount > 0) {
    return `+${formatMoney(amount)}`;
  }

  if (amount < 0) {
    return `-${formatMoney(Math.abs(amount))}`;
  }

  return formatMoney(0);
}

function formatClock(date) {
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function formatPlainMoney(amount) {
  return amount.toLocaleString("zh-CN", {
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  });
}

function getCurrencyProfile() {
  return currencyProfiles[selectedCurrency] || currencyProfiles.CNY;
}

function formatCurrencyLabel(currency = selectedCurrency) {
  const profile = currencyProfiles[currency] || currencyProfiles.CNY;

  return `${profile.name} ${profile.symbol}`;
}

function fromBaseCurrency(amount) {
  return Number(amount) || 0;
}

function toBaseCurrency(amount) {
  return Number(amount) || 0;
}

function formatAssetMoney(amount) {
  const profile = getCurrencyProfile();
  const convertedAmount = fromBaseCurrency(amount);
  const sign = convertedAmount < 0 ? "-" : "";
  const absoluteAmount = Math.abs(convertedAmount).toLocaleString("zh-CN", {
    minimumFractionDigits: profile.decimals,
    maximumFractionDigits: profile.decimals,
  });

  return `${sign}${absoluteAmount}`;
}

function formatAssetSummaryMoney(amount) {
  return formatAssetMoney(amount);
}

function formatAssetInputAmount(amount) {
  const profile = getCurrencyProfile();

  return fromBaseCurrency(amount).toLocaleString("zh-CN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: profile.decimals,
  });
}

function formatDetailMoney(amount, flow = "expense") {
  const profile = getCurrencyProfile();
  const convertedAmount = fromBaseCurrency(Number(amount) || 0);
  const prefix = flow === "income" ? "+" : convertedAmount < 0 ? "-" : "";
  const absoluteAmount = Math.abs(convertedAmount).toLocaleString("zh-CN", {
    minimumFractionDigits: profile.decimals,
    maximumFractionDigits: profile.decimals,
  });

  return `${prefix}${profile.symbol}${absoluteAmount}`;
}

function formatDetailBalanceMoney(amount) {
  return formatDetailMoney(amount, amount > 0 ? "income" : "expense");
}

function normalizeQuantity(value) {
  const quantity = Math.floor(Number(value) || 1);
  return Math.max(1, Math.min(99, quantity));
}

function getRecordQuantity(record) {
  return normalizeQuantity(record.quantity);
}

function getRecordUnitAmount(record) {
  const unitAmount = Number(record.unitAmount);

  if (Number.isFinite(unitAmount) && unitAmount > 0) {
    return unitAmount;
  }

  return (Number(record.amount) || 0) / getRecordQuantity(record);
}

function getRecordCalculation(record) {
  const quantity = getRecordQuantity(record);

  if (quantity <= 1) {
    return "";
  }

  return `${formatDetailMoney(getRecordUnitAmount(record))} × ${quantity}`;
}

function parseAmountInput(value) {
  const normalized = String(value || "")
    .replace(/,/g, "")
    .replace(/[^\d.]/g, "");
  const amount = Number(normalized);

  return Number.isFinite(amount) && amount >= 0 ? amount : null;
}

function safeDate(value) {
  const date = value ? new Date(value) : today;
  return Number.isNaN(date.getTime()) ? today : date;
}

function getRecordDate(record) {
  return record.dateKey ? fromDateKey(record.dateKey) : safeDate(record.createdAt);
}

function compareDateOnly(leftDate, rightDate) {
  return startOfDay(leftDate).getTime() - startOfDay(rightDate).getTime();
}

function isPastDate(date) {
  return compareDateOnly(date, today) < 0;
}

function isTodayDate(date) {
  return compareDateOnly(date, today) === 0;
}

function getRecordFlow(record) {
  return record.flow || record.type || (record.isIncome ? "income" : "expense");
}

function normalizeCategoryName(category) {
  const normalized = String(category || "其他")
    .replace(/[^\u4e00-\u9fa5A-Za-z0-9]/g, "")
    .trim();

  return normalized || "其他";
}

function getWeekStart(date) {
  const day = date.getDay() || 7;
  return addDays(date, 1 - day);
}

function getPeriodConfig(period) {
  if (period === "month") {
    const start = new Date(today.getFullYear(), today.getMonth(), 1);
    const end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const points = [];

    for (let day = 1; day <= end.getDate(); day += 1) {
      const date = new Date(today.getFullYear(), today.getMonth(), day);
      points.push({
        key: toDateKey(date),
        label: day === today.getDate() ? "今天" : `${day}`,
        date,
      });
    }

    return { start, end, points, label: periodLabels.month };
  }

  if (period === "year") {
    const start = new Date(today.getFullYear(), 0, 1);
    const end = new Date(today.getFullYear(), 11, 31);
    const points = Array.from({ length: 12 }, (_, index) => {
      const date = new Date(today.getFullYear(), index, 1);
      return {
        key: `${today.getFullYear()}-${String(index + 1).padStart(2, "0")}`,
        label: `${index + 1}月`,
        date,
      };
    });

    return { start, end, points, label: periodLabels.year };
  }

  const start = getWeekStart(today);
  const end = addDays(start, 6);
  const points = Array.from({ length: 7 }, (_, index) => {
    const date = addDays(start, index);
    return {
      key: toDateKey(date),
      label: toDateKey(date) === toDateKey(today) ? "今天" : `${date.getMonth() + 1}-${date.getDate()}`,
      date,
    };
  });

  return { start, end, points, label: periodLabels.week };
}

function isWithinPeriod(date, config) {
  return date >= config.start && date <= config.end;
}

function readRecords() {
  let records = [];

  try {
    records = storageAvailable
      ? JSON.parse(window.localStorage.getItem(storageKey) || "[]")
      : memoryRecords;
  } catch {
    storageAvailable = false;
    records = memoryRecords;
  }

  return records.map((record) => {
    const recordDate = record.dateKey ? fromDateKey(record.dateKey) : safeDate(record.createdAt);
    const createdAtDate = safeDate(record.createdAt);
    const recordTime = record.recordTime || formatClock(createdAtDate);
    const originalInputAmount = Number(record.inputAmount);
    const hasOriginalCurrencyInput =
      Boolean(record.inputCurrency) && Number.isFinite(originalInputAmount) && originalInputAmount > 0;
    const amount = hasOriginalCurrencyInput ? originalInputAmount : Number(record.amount) || 0;
    const quantity = normalizeQuantity(record.quantity);
    const savedUnitAmount = Number(record.unitAmount);

    return {
      ...record,
      id: record.id || `${toDateKey(recordDate)}-${record.note}-${record.amount}-${recordTime}`,
      amount,
      quantity,
      unitAmount:
        Number.isFinite(savedUnitAmount) && savedUnitAmount > 0 ? savedUnitAmount : amount / quantity,
      isPendingAmount: Boolean(record.isPendingAmount),
      flow: getRecordFlow(record),
      dateKey: record.dateKey || toDateKey(recordDate),
      dateLabel: record.dateLabel || formatDateLabel(recordDate),
      recordTime,
    };
  });
}

function writeRecords(records) {
  memoryRecords = records;

  if (!storageAvailable) {
    return;
  }

  try {
    window.localStorage.setItem(storageKey, JSON.stringify(records));
  } catch {
    storageAvailable = false;
  }
}

function readSelectedCurrency() {
  try {
    const savedCurrency = window.localStorage.getItem(currencyStorageKey);
    return currencyProfiles[savedCurrency] ? savedCurrency : "CNY";
  } catch {
    return "CNY";
  }
}

function writeSelectedCurrency(currency) {
  try {
    window.localStorage.setItem(currencyStorageKey, currency);
  } catch {
    storageAvailable = false;
  }
}

function getBudgetMonthKey() {
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`;
}

function readMonthlyBudgets() {
  try {
    return JSON.parse(window.localStorage.getItem(budgetStorageKey) || "{}");
  } catch {
    return {};
  }
}

function readMonthlyBudget() {
  const budgets = readMonthlyBudgets();
  const budget = Number(budgets[getBudgetMonthKey()] || 0);

  return Number.isFinite(budget) && budget > 0 ? budget : 0;
}

function writeMonthlyBudgets(budgets) {
  try {
    window.localStorage.setItem(budgetStorageKey, JSON.stringify(budgets));
  } catch {
    storageAvailable = false;
  }
}

function writeMonthlyBudget(amount) {
  const budgets = readMonthlyBudgets();
  budgets[getBudgetMonthKey()] = Math.max(0, amount);
  writeMonthlyBudgets(budgets);
}

function readProjects() {
  try {
    const projects = JSON.parse(window.localStorage.getItem(projectStorageKey) || "[]");
    if (!Array.isArray(projects)) {
      return [];
    }

    return projects
      .filter((project) => project?.id && project?.name && project?.startDate && project?.endDate)
      .map((project, index) => ({
        ...project,
        id: String(project.id),
        budget: Math.max(0, Number(project.budget) || 0),
        color: project.color || projectColors[index % projectColors.length],
      }))
      .sort((left, right) => left.startDate.localeCompare(right.startDate));
  } catch {
    return [];
  }
}

function writeProjects(projects) {
  try {
    window.localStorage.setItem(projectStorageKey, JSON.stringify(projects));
  } catch {
    storageAvailable = false;
  }
}

function readNoSpendDays() {
  try {
    const days = JSON.parse(window.localStorage.getItem(noSpendStorageKey) || "[]");
    if (!Array.isArray(days)) {
      return [];
    }

    return [...new Set(days.filter((dateKey) => /^\d{4}-\d{2}-\d{2}$/.test(String(dateKey))))].sort();
  } catch {
    return [];
  }
}

function writeNoSpendDays(days) {
  try {
    const normalizedDays = [...new Set(days.map(String))].sort();
    window.localStorage.setItem(noSpendStorageKey, JSON.stringify(normalizedDays));
  } catch {
    storageAvailable = false;
  }
}

function isNoSpendDay(dateKey) {
  return readNoSpendDays().includes(dateKey);
}

function setNoSpendDay(dateKey, shouldMark) {
  const days = new Set(readNoSpendDays());

  if (shouldMark) {
    days.add(dateKey);
  } else {
    days.delete(dateKey);
  }

  writeNoSpendDays([...days]);
}

function toggleSelectedNoSpendDay() {
  const selectedRecords = getSelectedDateRecords();
  const isMarked = isNoSpendDay(selectedDateKey);
  const hasExpenseRecord = selectedRecords.some((record) => getRecordFlow(record) === "expense");

  if (!isMarked && hasExpenseRecord) {
    showToast("当天已有支出，不能标记无消费");
    return;
  }

  if (!isMarked && getSelectedDateState() === "future") {
    showToast("未来日期还不能确认无消费");
    return;
  }

  setNoSpendDay(selectedDateKey, !isMarked);
  buildDateStrip(getSelectedDate());
  updateSelectedDateContext();
  renderLedger();
  if (appScreen.dataset.monthDetailOpen === "true") {
    renderMonthDetail();
  }
  showToast(isMarked ? "已撤销无消费标记" : "已记录这天无消费");
}

function renderBackupCard() {
  const records = readRecords();
  const projects = readProjects();
  const latestTimestamp = records.reduce((latest, record) => {
    const timestamp = new Date(record.createdAt || 0).getTime();
    return Number.isFinite(timestamp) ? Math.max(latest, timestamp) : latest;
  }, 0);

  backupRecordCount.textContent = `${records.length} 笔记录 · ${projects.length} 个项目`;
  backupLocalStatus.textContent = latestTimestamp
    ? `最近记账 ${new Date(latestTimestamp).toLocaleString("zh-CN", {
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })}`
    : "建议每月导出一次备份";
}

function buildBackupPayload() {
  return {
    app: "bookkeeping-app",
    version: backupVersion,
    exportedAt: new Date().toISOString(),
    currency: selectedCurrency,
    records: readRecords(),
    projects: readProjects(),
    monthlyBudgets: readMonthlyBudgets(),
    noSpendDays: readNoSpendDays(),
  };
}

function exportBackup() {
  const payload = buildBackupPayload();
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const downloadUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const now = new Date();
  const timeKey = `${toDateKey(now)}-${String(now.getHours()).padStart(2, "0")}${String(
    now.getMinutes(),
  ).padStart(2, "0")}`;

  link.href = downloadUrl;
  link.download = `记账备份-${timeKey}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 0);

  backupMessage.classList.remove("is-error");
  backupMessage.textContent = `已导出 ${payload.records.length} 笔记录，请保留好这个 JSON 文件`;
  showToast("账本备份已导出");
}

function getBackupRecordKey(record, index) {
  return String(
    record?.id ||
      `${record?.dateKey || "unknown"}-${record?.note || "record"}-${record?.amount || 0}-${
        record?.recordTime || index
      }`,
  );
}

async function importBackup(file) {
  if (!file) {
    return;
  }

  try {
    if (file.size > 5 * 1024 * 1024) {
      throw new Error("备份文件过大");
    }

    const payload = JSON.parse(await file.text());

    if (
      payload?.app !== "bookkeeping-app" ||
      !Array.isArray(payload.records) ||
      !Array.isArray(payload.projects) ||
      typeof payload.monthlyBudgets !== "object" ||
      payload.monthlyBudgets === null
    ) {
      throw new Error("备份格式不正确");
    }

    const recordMap = new Map();
    [...payload.records, ...readRecords()].forEach((record, index) => {
      recordMap.set(getBackupRecordKey(record, index), record);
    });

    const projectMap = new Map();
    [...payload.projects, ...readProjects()].forEach((project) => {
      if (project?.id) {
        projectMap.set(String(project.id), project);
      }
    });

    writeRecords([...recordMap.values()]);
    writeProjects([...projectMap.values()]);
    writeMonthlyBudgets({ ...payload.monthlyBudgets, ...readMonthlyBudgets() });
    writeNoSpendDays([...(Array.isArray(payload.noSpendDays) ? payload.noSpendDays : []), ...readNoSpendDays()]);

    if (currencyProfiles[payload.currency]) {
      selectedCurrency = payload.currency;
      writeSelectedCurrency(selectedCurrency);
    }

    buildDateStrip(getSelectedDate());
    updateSelectedDateContext();
    renderLedger();
    renderAssetsView();
    renderEntryProjectOptions();
    if (activeTab === "数据") {
      renderDataView();
    }
    if (appScreen.dataset.monthDetailOpen === "true") {
      renderMonthDetail();
    }

    backupMessage.classList.remove("is-error");
    backupMessage.textContent = `恢复完成，当前共 ${readRecords().length} 笔记录`;
    showToast("备份已恢复，原有记录已保留");
  } catch (error) {
    backupMessage.classList.add("is-error");
    backupMessage.textContent = error instanceof Error ? error.message : "无法读取这个备份文件";
    showToast("备份恢复失败");
  } finally {
    backupFileInput.value = "";
  }
}

function isDateWithinProject(dateKey, project) {
  return dateKey >= project.startDate && dateKey <= project.endDate;
}

function getProjectsForDate(dateKey = selectedDateKey) {
  return readProjects().filter((project) => isDateWithinProject(dateKey, project));
}

function getProjectById(projectId) {
  return readProjects().find((project) => String(project.id) === String(projectId)) || null;
}

function getProjectRecords(projectId) {
  return readRecords().filter((record) => String(record.projectId || "") === String(projectId));
}

function getProjectTotals(projectId) {
  const records = getProjectRecords(projectId);
  const expense = getFlowTotal(records, "expense");
  const income = getFlowTotal(records, "income");

  return { records, expense, income, balance: income - expense };
}

function formatProjectDateRange(project) {
  const start = fromDateKey(project.startDate);
  const end = fromDateKey(project.endDate);
  const startText = `${start.getMonth() + 1}月${start.getDate()}日`;
  const endText = `${end.getMonth() + 1}月${end.getDate()}日`;

  return start.getFullYear() === end.getFullYear()
    ? `${startText}—${endText}`
    : `${start.getFullYear()}年${startText}—${end.getFullYear()}年${endText}`;
}

function getProjectStatus(project) {
  const todayKey = toDateKey(today);

  if (todayKey < project.startDate) {
    return { key: "upcoming", label: "即将开始" };
  }
  if (todayKey > project.endDate) {
    return { key: "ended", label: "已结束" };
  }

  return { key: "active", label: "进行中" };
}

function getProjectProgress(project, date = today) {
  const start = fromDateKey(project.startDate);
  const end = fromDateKey(project.endDate);
  const totalDays = Math.max(1, Math.round((end - start) / 86400000) + 1);
  const elapsedDays = Math.round((startOfDay(date) - start) / 86400000) + 1;

  return Math.max(0, Math.min(1, elapsedDays / totalDays));
}

function getSelectedProjectStatusLabel() {
  const state = getSelectedDateState();

  if (state === "past") {
    return "当时进行中";
  }
  if (state === "future") {
    return "计划中";
  }

  return "项目进行中";
}

function renderProjectStatus() {
  const projects = getProjectsForDate(selectedDateKey);
  const hasProjects = projects.length > 0;
  const fragment = document.createDocumentFragment();

  projectStatusSpace.hidden = !hasProjects;
  appScreen.dataset.projectStatus = String(hasProjects);

  projects.forEach((project) => {
    const { records, expense } = getProjectTotals(project.id);
    const card = document.createElement("button");
    const top = document.createElement("span");
    const badge = document.createElement("span");
    const period = document.createElement("span");
    const name = document.createElement("strong");
    const footer = document.createElement("span");
    const summary = document.createElement("span");
    const progress = document.createElement("span");
    const progressValue = document.createElement("span");

    card.className = "project-status-card";
    card.type = "button";
    card.dataset.projectId = project.id;
    card.style.setProperty("--project-color", project.color);
    card.setAttribute(
      "aria-label",
      `查看项目 ${project.name}，已支出 ${formatDetailMoney(expense)}`,
    );

    top.className = "project-status-top";
    badge.className = "project-status-badge";
    badge.textContent = getSelectedProjectStatusLabel();
    period.className = "project-status-period";
    period.textContent = formatProjectDateRange(project);
    name.className = "project-status-name";
    name.textContent = project.name;
    footer.className = "project-status-footer";
    summary.textContent = `${records.length} 笔 · 已支出 ${formatDetailMoney(expense)}`;
    progress.className = "project-status-progress";
    progressValue.style.width = `${Math.round(getProjectProgress(project, getSelectedDate()) * 100)}%`;

    top.append(badge, period);
    progress.append(progressValue);
    footer.append(summary, progress);
    card.append(top, name, footer);
    fragment.append(card);
  });

  projectStatusList.replaceChildren(fragment);
}

function renderEntryProjectOptions() {
  const projects = getProjectsForDate(selectedDateKey);
  const selectedProjectExists = projects.some((project) => project.id === selectedEntryProjectId);
  const fragment = document.createDocumentFragment();

  if (selectedEntryProjectId && !selectedProjectExists) {
    selectedEntryProjectId = "";
  }

  const noProjectButton = document.createElement("button");
  noProjectButton.className = "entry-project-option";
  noProjectButton.classList.toggle("is-active", !selectedEntryProjectId);
  noProjectButton.type = "button";
  noProjectButton.dataset.projectId = "";
  noProjectButton.setAttribute("role", "option");
  noProjectButton.setAttribute("aria-selected", String(!selectedEntryProjectId));
  noProjectButton.textContent = "不计入项目";
  fragment.append(noProjectButton);

  projects.forEach((project) => {
    const option = document.createElement("button");
    const dot = document.createElement("span");
    const label = document.createElement("span");
    const isActive = project.id === selectedEntryProjectId;

    option.className = "entry-project-option";
    option.classList.toggle("is-active", isActive);
    option.type = "button";
    option.dataset.projectId = project.id;
    option.setAttribute("role", "option");
    option.setAttribute("aria-selected", String(isActive));
    option.style.setProperty("--project-color", project.color);
    dot.className = "entry-project-dot";
    dot.setAttribute("aria-hidden", "true");
    label.textContent = project.name;
    option.append(dot, label);
    fragment.append(option);
  });

  entryProjectOptions.replaceChildren(fragment);
  entryProjectHint.textContent = projects.length
    ? `只显示覆盖 ${formatMonthDay(getSelectedDate())} 的项目`
    : `当前日期还没有项目，可以新建旅行或活动`;
}

function setEntryProject(projectId) {
  const normalizedId = String(projectId || "");

  if (normalizedId && !getProjectsForDate(selectedDateKey).some((project) => project.id === normalizedId)) {
    return;
  }

  selectedEntryProjectId = normalizedId;
  formError.textContent = "";
  renderEntryProjectOptions();
}

function getSelectedEntryProject() {
  return selectedEntryProjectId ? getProjectById(selectedEntryProjectId) : null;
}

function openProjectEditor() {
  const selectedDate = getSelectedDate();

  projectEditorForm.reset();
  projectStartInput.value = selectedDateKey;
  projectEndInput.value = toDateKey(addDays(selectedDate, 7));
  projectEditorCurrency.textContent = `预算将按 ${formatCurrencyLabel()} 输入`;
  projectEditorError.textContent = "";
  projectEditorDialog.hidden = false;

  requestAnimationFrame(() => {
    appScreen.dataset.projectEditorOpen = "true";
    projectNameInput.focus();
  });
}

function closeProjectEditor() {
  appScreen.dataset.projectEditorOpen = "false";

  window.setTimeout(() => {
    projectEditorDialog.hidden = true;
  }, 180);
}

function saveProject(event) {
  event.preventDefault();

  const name = projectNameInput.value.trim();
  const startDate = projectStartInput.value;
  const endDate = projectEndInput.value;
  const budgetText = projectBudgetInput.value.trim();
  const displayBudget = budgetText ? parseAmountInput(budgetText) : 0;

  projectEditorError.textContent = "";

  if (!name) {
    projectEditorError.textContent = "请输入项目名称";
    projectNameInput.focus();
    return;
  }
  if (!startDate || !endDate || startDate > endDate) {
    projectEditorError.textContent = "请选择正确的开始和结束日期";
    return;
  }
  if (selectedDateKey < startDate || selectedDateKey > endDate) {
    projectEditorError.textContent = "当前记账日期需要在项目日期范围内";
    return;
  }
  if (displayBudget === null) {
    projectEditorError.textContent = "请输入有效的预算金额";
    projectBudgetInput.focus();
    return;
  }

  const projects = readProjects();
  const project = {
    id: `project-${Date.now()}`,
    name,
    startDate,
    endDate,
    budget: displayBudget > 0 ? toBaseCurrency(displayBudget) : 0,
    color: projectColors[projects.length % projectColors.length],
    createdAt: new Date().toISOString(),
  };

  writeProjects([...projects, project]);
  selectedEntryProjectId = project.id;
  renderEntryProjectOptions();
  renderProjectStatus();
  closeProjectEditor();
  showToast(`已创建项目“${project.name}”`);
}

function renderProjectDetail(projectId = activeProjectDetailId) {
  const project = getProjectById(projectId);

  if (!project) {
    return;
  }

  const status = getProjectStatus(project);
  const totals = getProjectTotals(project.id);
  const remaining = project.budget - totals.expense;
  const sortedRecords = [...totals.records].sort((left, right) => {
    const dateCompare = String(right.dateKey).localeCompare(String(left.dateKey));
    return dateCompare || Number(right.id || 0) - Number(left.id || 0);
  });
  const fragment = document.createDocumentFragment();

  projectDetailDialog.style.setProperty("--project-color", project.color);
  projectDetailTitle.textContent = project.name;
  projectDetailStatus.textContent = status.label;
  projectDetailStatus.dataset.status = status.key;
  projectDetailPeriod.textContent = `${formatProjectDateRange(project)} · ${Math.round(getProjectProgress(project) * 100)}%`;
  projectDetailProgress.style.width = `${Math.round(getProjectProgress(project) * 100)}%`;
  projectDetailExpense.textContent = formatDetailMoney(totals.expense);
  projectDetailBudget.textContent = project.budget > 0 ? formatDetailMoney(project.budget) : "未设置";
  projectDetailRemaining.textContent = project.budget > 0 ? formatDetailBalanceMoney(remaining) : "—";
  projectDetailRemaining.classList.toggle("is-negative", project.budget > 0 && remaining < 0);
  projectDetailCount.textContent = `${totals.records.length} 笔`;

  if (!sortedRecords.length) {
    const empty = document.createElement("p");
    empty.className = "project-detail-empty";
    empty.textContent = "还没有计入这个项目的记录";
    fragment.append(empty);
  }

  sortedRecords.forEach((record) => {
    const row = document.createElement("button");
    const visual = document.createElement("span");
    const main = document.createElement("span");
    const note = document.createElement("strong");
    const meta = document.createElement("small");
    const amount = document.createElement("b");

    row.className = "project-detail-record";
    row.classList.toggle("is-pending", record.isPendingAmount);
    row.type = "button";
    row.dataset.recordId = String(record.id);
    row.dataset.flow = getRecordFlow(record);
    row.setAttribute(
      "aria-label",
      record.isPendingAmount
        ? `补充金额 ${record.note}`
        : `打开撤回确认 ${record.note} ${formatDetailMoney(Number(record.amount) || 0, getRecordFlow(record))}`,
    );
    visual.className = "project-detail-record-visual";
    visual.textContent = getCategoryIcon(record.category);
    main.className = "project-detail-record-main";
    note.textContent = record.note;
    meta.textContent = `${record.dateLabel} · ${normalizeCategoryName(record.category)}${
      record.isPendingAmount ? " · 金额待确认" : ""
    }${
      getRecordCalculation(record) ? ` · ${getRecordCalculation(record)}` : ""
    }`;
    amount.textContent = record.isPendingAmount
      ? "待补"
      : formatDetailMoney(Number(record.amount) || 0, getRecordFlow(record));
    main.append(note, meta);
    row.append(visual, main, amount);
    fragment.append(row);
  });

  projectDetailRecords.replaceChildren(fragment);
}

function openProjectDetail(projectId) {
  if (!getProjectById(projectId)) {
    return;
  }

  activeProjectDetailId = String(projectId);
  renderProjectDetail();
  projectDetailDialog.hidden = false;

  requestAnimationFrame(() => {
    appScreen.dataset.projectDetailOpen = "true";
    projectDetailClose.focus();
  });
}

function closeProjectDetail() {
  appScreen.dataset.projectDetailOpen = "false";

  window.setTimeout(() => {
    projectDetailDialog.hidden = true;
    activeProjectDetailId = "";
  }, 180);
}

function getPeriodRecords(flow = selectedFlow, period = selectedPeriod) {
  const config = getPeriodConfig(period);

  return readRecords().filter((record) => {
    return getRecordFlow(record) === flow && isWithinPeriod(getRecordDate(record), config);
  });
}

function getMonthRecords() {
  return readRecords().filter((record) => {
    return isSameMonth(getRecordDate(record), today.getFullYear(), today.getMonth());
  });
}

function getRecordsInMonth(date) {
  return readRecords().filter((record) => {
    return isSameMonth(getRecordDate(record), date.getFullYear(), date.getMonth());
  });
}

function getFlowTotal(records, flow) {
  return records
    .filter((record) => getRecordFlow(record) === flow)
    .reduce((sum, record) => sum + Number(record.amount || 0), 0);
}

function buildMonthlyCalendar(date = getSelectedDate()) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const monthStart = new Date(year, month, 1);
  const monthEnd = new Date(year, month + 1, 0);
  const records = getRecordsInMonth(date);
  const dailyTotals = new Map();
  const noSpendDays = new Set(
    readNoSpendDays().filter((dateKey) => isSameMonth(fromDateKey(dateKey), year, month)),
  );

  records.forEach((record) => {
    const dateKey = toDateKey(getRecordDate(record));
    const current = dailyTotals.get(dateKey) || { income: 0, expense: 0, count: 0 };
    const amount = Number(record.amount || 0);

    if (getRecordFlow(record) === "income") {
      current.income += amount;
    } else {
      current.expense += amount;
    }

    current.count += 1;
    dailyTotals.set(dateKey, current);
  });

  return {
    dailyTotals,
    monthEnd,
    monthStart,
    noSpendDays,
    records,
  };
}

function getSelectedDateRecords() {
  return readRecords().filter((record) => record.dateKey === selectedDateKey);
}

function getSeriesData(records, config, period = selectedPeriod) {
  const totals = new Map(config.points.map((point) => [point.key, 0]));

  records.forEach((record) => {
    const recordDate = getRecordDate(record);
    const key =
      period === "year"
        ? `${recordDate.getFullYear()}-${String(recordDate.getMonth() + 1).padStart(2, "0")}`
        : toDateKey(recordDate);

    totals.set(key, (totals.get(key) || 0) + Number(record.amount || 0));
  });

  return config.points.map((point) => ({
    ...point,
    value: totals.get(point.key) || 0,
  }));
}

function buildRankData(records) {
  const totals = new Map();

  records.forEach((record) => {
    const name = normalizeCategoryName(record.category);
    totals.set(name, (totals.get(name) || 0) + Number(record.amount || 0));
  });

  return [...totals.entries()]
    .map(([name, total]) => ({ name, total }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 6);
}

function buildCurrentDataSnapshot() {
  const config = getPeriodConfig(selectedPeriod);
  const records = getPeriodRecords();
  const series = getSeriesData(records, config);
  const total = series.reduce((sum, item) => sum + item.value, 0);
  const average = series.length ? total / series.length : 0;
  const ranking = buildRankData(records);

  return { average, config, ranking, records, series, total };
}

function getMonthChartIndexes(points) {
  const lastIndex = points.length - 1;
  const indexes = new Set(
    [1, 5, 10, 15, 20, 25]
      .map((day) => day - 1)
      .filter((index) => index >= 0 && index <= lastIndex),
  );
  const todayIndex = points.findIndex((point) => point.label === "今天");

  indexes.add(lastIndex);

  if (todayIndex >= 0) {
    indexes.forEach((index) => {
      if (index !== todayIndex && Math.abs(index - todayIndex) <= 2) {
        indexes.delete(index);
      }
    });
    indexes.add(todayIndex);
  }

  return indexes;
}

function renderTrendChart(series) {
  const width = 320;
  const height = 166;
  const chartTop = 20;
  const chartBottom = 122;
  const chartLeft = 12;
  const chartRight = width - 12;
  const maxValue = Math.max(...series.map((item) => item.value), 0);
  const divisor = maxValue || 1;
  const points = series.map((item, index) => {
    const x =
      series.length === 1
        ? width / 2
        : chartLeft + ((chartRight - chartLeft) * index) / (series.length - 1);
    const y = maxValue === 0 ? chartBottom : chartBottom - ((chartBottom - chartTop) * item.value) / divisor;
    return { ...item, x, y };
  });
  const pointString = points.map((point) => `${point.x},${point.y}`).join(" ");
  const monthDisplayIndexes = selectedPeriod === "month" ? getMonthChartIndexes(points) : null;
  const displayPoints = monthDisplayIndexes
    ? points.filter((_, index) => monthDisplayIndexes.has(index))
    : points;
  const labels = displayPoints
    .map((point) => {
      return `<text x="${point.x}" y="158" text-anchor="middle" class="chart-label">${point.label}</text>`;
    })
    .join("");
  const circles = displayPoints
    .map((point) => {
      return `<circle cx="${point.x}" cy="${point.y}" r="4.5" class="chart-point"><title>${point.label} ${formatMoney(point.value)}</title></circle>`;
    })
    .join("");

  trendChart.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="当前周期趋势折线图">
      <line x1="${chartLeft}" y1="${chartBottom}" x2="${chartRight}" y2="${chartBottom}" class="chart-axis"></line>
      <polyline points="${pointString}" class="chart-line"></polyline>
      ${circles}
      ${labels}
      ${
        maxValue === 0
          ? `<text x="${width / 2}" y="76" text-anchor="middle" class="chart-empty-label">暂无${flowLabels[selectedFlow]}数据</text>`
          : ""
      }
    </svg>
  `;
}

function renderRanking(ranking, total) {
  rankList.replaceChildren();

  if (!ranking.length) {
    const empty = document.createElement("p");
    empty.className = "rank-empty";
    empty.textContent = `当前周期暂无${flowLabels[selectedFlow]}记录`;
    rankList.append(empty);
    return;
  }

  const fragment = document.createDocumentFragment();
  const maxTotal = Math.max(...ranking.map((item) => item.total), 1);

  ranking.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "rank-item";

    const rankIndex = document.createElement("span");
    rankIndex.className = "rank-index";
    rankIndex.textContent = String(index + 1);

    const main = document.createElement("div");
    main.className = "rank-main";

    const nameRow = document.createElement("div");
    nameRow.className = "rank-name-row";

    const name = document.createElement("span");
    name.className = "rank-name";
    name.textContent = item.name;

    const percent = document.createElement("span");
    percent.className = "rank-percent";
    percent.textContent = `${Math.round((item.total / Math.max(total, 1)) * 100)}%`;

    const bar = document.createElement("div");
    bar.className = "rank-bar";

    const barValue = document.createElement("span");
    barValue.style.width = `${Math.max(8, (item.total / maxTotal) * 100)}%`;
    barValue.style.background = categoryColors[item.name] || categoryColors.其他;

    const amount = document.createElement("strong");
    amount.className = "rank-amount";
    amount.textContent = formatMoney(item.total);

    nameRow.append(name, percent);
    bar.append(barValue);
    main.append(nameRow, bar);
    row.append(rankIndex, main, amount);
    fragment.append(row);
  });

  rankList.append(fragment);
}

function renderDataView() {
  const { average, config, ranking, series, total } = buildCurrentDataSnapshot();
  const flowText = flowLabels[selectedFlow];
  const periodText = periodLabels[selectedPeriod];

  cycleTitle.textContent = periodText;
  cycleSubtitle.textContent = `总${flowText}：${formatPlainMoney(total)}`;
  cycleAverage.textContent = `平均值：${formatPlainMoney(average)}`;
  cycleTotal.textContent = formatMoney(total);
  rankTitle.textContent = `${flowText}排行榜`;
  rankPeriod.textContent = periodText;

  renderTrendChart(series);
  renderRanking(ranking, total);

  flowOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.flow === selectedFlow);
  });
  periodOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.period === selectedPeriod);
  });
}

function renderAssetsView() {
  const monthRecords = getMonthRecords();
  const allRecords = readRecords();
  const monthIncome = getFlowTotal(monthRecords, "income");
  const monthExpense = getFlowTotal(monthRecords, "expense");
  const monthBalance = monthIncome - monthExpense;
  const monthlyBudget = readMonthlyBudget();
  const remainingBudget = Math.max(monthlyBudget - monthExpense, 0);
  const budgetRatio = monthlyBudget > 0 ? Math.max(0, Math.min(1, remainingBudget / monthlyBudget)) : 0;
  const totalIncome = getFlowTotal(allRecords, "income");
  const totalExpense = getFlowTotal(allRecords, "expense");
  const monthText = String(today.getMonth() + 1).padStart(2, "0");

  assetMonthNumber.textContent = monthText;
  assetBudgetMonth.textContent = monthText;
  assetMonthIncome.textContent = formatAssetSummaryMoney(monthIncome);
  assetMonthExpense.textContent = formatAssetSummaryMoney(monthExpense);
  assetMonthBalance.textContent = formatAssetSummaryMoney(monthBalance);
  budgetRemaining.textContent = formatAssetMoney(remainingBudget);
  budgetTotal.textContent = formatAssetMoney(monthlyBudget);
  budgetSpent.textContent = formatAssetMoney(monthExpense);
  budgetPercent.textContent = `${Math.round(budgetRatio * 100)}%`;
  budgetRing.style.setProperty("--budget-sweep", `${Math.round(budgetRatio * 360)}deg`);
  budgetButton.lastChild.textContent = monthlyBudget > 0 ? " 调整预算" : " 设置预算";
  assetNet.textContent = formatAssetMoney(totalIncome - totalExpense);
  assetTotal.textContent = formatAssetMoney(totalIncome);
  assetLiability.textContent = formatAssetMoney(totalExpense);
  renderBackupCard();
  renderCurrencyControls();
}

function renderCurrencyControls() {
  currencyCodes.forEach((code) => {
    code.textContent = formatCurrencyLabel();
  });

  currencySwitches.forEach((button) => {
    button.setAttribute("aria-label", `更换币种，当前为${formatCurrencyLabel()}`);
  });

  currencyOptions.forEach((option) => {
    const profile = currencyProfiles[option.dataset.currency];
    const name = option.querySelector("span");
    const symbol = option.querySelector("small");

    if (profile) {
      name.textContent = profile.name;
      symbol.textContent = profile.symbol;
      option.setAttribute("aria-label", `${profile.name} ${profile.symbol}`);
    }

    option.classList.toggle("is-active", option.dataset.currency === selectedCurrency);
  });
}

function closeCurrencyPopovers() {
  currencySwitches.forEach((button) => button.setAttribute("aria-expanded", "false"));
  currencyPopovers.forEach((popover) => popover.setAttribute("hidden", ""));
}

function toggleCurrencyPopover(button, forceOpen) {
  const popoverId = button?.getAttribute("aria-controls");
  const popover = popoverId ? document.getElementById(popoverId) : null;

  if (!popover) {
    return;
  }

  const willOpen = typeof forceOpen === "boolean" ? forceOpen : popover.hasAttribute("hidden");
  closeCurrencyPopovers();

  if (willOpen) {
    button.setAttribute("aria-expanded", "true");
    popover.removeAttribute("hidden");
  }
}

function selectCurrency(currency) {
  if (!currencyProfiles[currency]) {
    return;
  }

  selectedCurrency = currency;
  writeSelectedCurrency(currency);
  closeCurrencyPopovers();
  renderCurrencyControls();
  renderLedger();
  renderAssetsView();
  syncEntryDateContext();
  if (appScreen.dataset.monthDetailOpen === "true") {
    renderMonthDetail();
  }
  if (appScreen.dataset.projectDetailOpen === "true") {
    renderProjectDetail();
  }
  showToast(`已切换为${currencyProfiles[currency].name}`);
}

function updateMonthlyBudget() {
  const currentBudget = readMonthlyBudget();
  const promptValue = window.prompt(
    `请输入${today.getMonth() + 1}月预算（${formatCurrencyLabel()}）`,
    currentBudget > 0 ? formatAssetInputAmount(currentBudget) : "",
  );

  if (promptValue === null) {
    return;
  }

  const displayAmount = parseAmountInput(promptValue);

  if (displayAmount === null) {
    showToast("请输入有效预算金额");
    return;
  }

  writeMonthlyBudget(toBaseCurrency(displayAmount));
  renderAssetsView();
  showToast("预算已更新");
}

function getPeakPoint(series) {
  return series.reduce((peak, item) => (item.value > peak.value ? item : peak), series[0] || { value: 0 });
}

function renderReport() {
  const { average, ranking, records, series, total } = buildCurrentDataSnapshot();
  const flowText = flowLabels[selectedFlow];
  const periodText = periodLabels[selectedPeriod];
  const peakPoint = getPeakPoint(series);
  const topCategory = ranking[0];
  const recordCount = records.length;

  reportTitle.textContent = `${periodText}${flowText}报告`;
  reportBody.innerHTML = `
    <section class="report-section">
      <h3>数据分析</h3>
      <p>${periodText}共记录 ${recordCount} 笔${flowText}，总${flowText} ${formatPlainMoney(total)}，周期平均值为 ${formatPlainMoney(average)}。${
        peakPoint.value > 0 ? `${peakPoint.label} 是峰值点，金额为 ${formatPlainMoney(peakPoint.value)}。` : `当前周期还没有可分析的${flowText}峰值。`
      }</p>
    </section>
    <section class="report-section">
      <h3>文案分析</h3>
      <p>${
        topCategory
          ? `${topCategory.name} 是${periodText}${flowText}最高的类别，占比约 ${Math.round((topCategory.total / Math.max(total, 1)) * 100)}%。如果这是必要开销，可以继续观察稳定性；如果是冲动消费，可以优先从这个类别做预算控制。`
          : `目前${periodText}暂无${flowText}数据。先记录几笔，报告会自动生成更像样的消费结论。`
      }</p>
    </section>
    <section class="report-section">
      <h3>下一步建议</h3>
      <p>${
        total > 0
          ? `建议保留高频类别的备注习惯，后续可以把${topCategory?.name || "主要类别"}拆得更细，月报和年报会更有参考价值。`
          : `先从今天开始记录 3-5 笔，数据页会自动更新折线图和排行榜。`
      }</p>
    </section>
  `;
}

function renderMonthDetailMode() {
  const showingCalendar = monthDetailMode === "calendar";

  monthCalendarView.hidden = !showingCalendar;
  monthFlowView.hidden = showingCalendar;
  monthDetailKicker.textContent = showingCalendar ? "日历明细" : "月度流水";

  monthDetailViewOptions.forEach((option) => {
    const isActive = option.dataset.monthView === monthDetailMode;
    option.classList.toggle("is-active", isActive);
    option.setAttribute("aria-selected", String(isActive));
  });
}

function setMonthDetailMode(mode) {
  if (!['calendar', 'flow'].includes(mode)) {
    return;
  }

  monthDetailMode = mode;
  renderMonthDetailMode();
}

function renderMonthFlow(records) {
  const sortedRecords = [...records].sort((left, right) => {
    const dateCompare = String(right.dateKey).localeCompare(String(left.dateKey));
    return dateCompare || Number(right.id || 0) - Number(left.id || 0);
  });
  const groupedRecords = new Map();
  const fragment = document.createDocumentFragment();

  sortedRecords.forEach((record) => {
    const dateKey = record.dateKey || toDateKey(getRecordDate(record));
    const group = groupedRecords.get(dateKey) || [];
    group.push(record);
    groupedRecords.set(dateKey, group);
  });

  if (!sortedRecords.length) {
    const empty = document.createElement("div");
    empty.className = "month-flow-empty";
    empty.innerHTML = "<strong>这个月还没有流水</strong><span>记下第一笔后，会按日期显示在这里</span>";
    fragment.append(empty);
  }

  groupedRecords.forEach((dayRecords, dateKey) => {
    const date = fromDateKey(dateKey);
    const dayIncome = getFlowTotal(dayRecords, "income");
    const dayExpense = getFlowTotal(dayRecords, "expense");
    const section = document.createElement("section");
    const header = document.createElement("header");
    const dateLabel = document.createElement("strong");
    const summary = document.createElement("span");
    const list = document.createElement("div");

    section.className = "month-flow-day";
    header.className = "month-flow-day-header";
    dateLabel.textContent = `${formatMonthDay(date)} · ${formatWeekday(date)}`;
    summary.textContent = `${dayRecords.length} 笔 · 支出 ${formatDetailMoney(dayExpense)}${
      dayIncome > 0 ? ` · 收入 ${formatDetailMoney(dayIncome, "income")}` : ""
    }`;
    list.className = "month-flow-day-list";

    dayRecords.forEach((record) => {
      const row = document.createElement("button");
      const visual = document.createElement("span");
      const main = document.createElement("span");
      const note = document.createElement("strong");
      const meta = document.createElement("small");
      const amount = document.createElement("b");
      const metaParts = [normalizeCategoryName(record.category)];
      const calculation = getRecordCalculation(record);

      if (record.projectName) {
        metaParts.push(`项目：${record.projectName}`);
      }
      if (calculation) {
        metaParts.push(calculation);
      }
      if (record.isPendingAmount) {
        metaParts.push("金额待确认");
      }
      if (record.recordTime) {
        metaParts.push(record.recordTime);
      }

      row.className = "month-flow-record";
      row.classList.toggle("is-pending", record.isPendingAmount);
      row.type = "button";
      row.dataset.recordId = String(record.id);
      row.dataset.flow = getRecordFlow(record);
      row.setAttribute(
        "aria-label",
        record.isPendingAmount
          ? `补充金额 ${record.note}`
          : `查看并可撤回 ${record.note} ${formatDetailMoney(Number(record.amount) || 0, getRecordFlow(record))}`,
      );
      visual.className = "month-flow-record-visual";
      visual.textContent = getCategoryIcon(record.category);
      main.className = "month-flow-record-main";
      note.textContent = record.note;
      meta.textContent = metaParts.join(" · ");
      amount.textContent = record.isPendingAmount
        ? "待补金额"
        : formatDetailMoney(Number(record.amount) || 0, getRecordFlow(record));
      main.append(note, meta);
      row.append(visual, main, amount);
      list.append(row);
    });

    header.append(dateLabel, summary);
    section.append(header, list);
    fragment.append(section);
  });

  monthFlowList.replaceChildren(fragment);
}

function renderMonthDetail() {
  if (!hasMonthDetail) {
    return;
  }

  const viewDate = monthDetailViewDate;
  const { dailyTotals, monthEnd, monthStart, noSpendDays, records } = buildMonthlyCalendar(viewDate);
  const incomeTotal = getFlowTotal(records, "income");
  const expenseTotal = getFlowTotal(records, "expense");
  const balanceTotal = incomeTotal - expenseTotal;
  const fragment = document.createDocumentFragment();
  const isCurrentMonth = isSameMonth(viewDate, today.getFullYear(), today.getMonth());

  monthDetailTitle.textContent = `${viewDate.getFullYear()}年${viewDate.getMonth() + 1}月明细`;
  monthDetailCurrent.classList.toggle("is-current", isCurrentMonth);
  monthDetailCurrent.textContent = "本月";
  monthDetailCurrent.setAttribute("aria-label", isCurrentMonth ? "当前已是本月" : "回到本月");
  monthDetailIncome.textContent = formatDetailMoney(incomeTotal, "income");
  monthDetailExpense.textContent = formatDetailMoney(expenseTotal);
  monthDetailBalance.textContent = formatDetailBalanceMoney(balanceTotal);
  monthDetailBalance.classList.toggle("is-negative", balanceTotal < 0);
  renderMonthDetailMode();
  renderMonthFlow(records);

  for (let index = 0; index < monthStart.getDay(); index += 1) {
    const placeholder = document.createElement("span");
    placeholder.className = "month-day-placeholder";
    placeholder.setAttribute("aria-hidden", "true");
    fragment.append(placeholder);
  }

  for (let day = 1; day <= monthEnd.getDate(); day += 1) {
    const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    const dateKey = toDateKey(date);
    const totals = dailyTotals.get(dateKey) || { income: 0, expense: 0, count: 0 };
    const dayButton = document.createElement("button");
    const hasIncome = totals.income > 0;
    const hasExpense = totals.expense > 0;
    const hasRecords = totals.count > 0;
    const isNoSpend = noSpendDays.has(dateKey) && !hasExpense;

    dayButton.className = "month-day";
    dayButton.type = "button";
    dayButton.dataset.dateKey = dateKey;
    dayButton.classList.toggle("is-selected", dateKey === selectedDateKey);
    dayButton.classList.toggle("is-today", dateKey === toDateKey(today));
    dayButton.classList.toggle("has-records", hasRecords);
    dayButton.classList.toggle("is-no-spend", isNoSpend);
    dayButton.setAttribute(
      "aria-label",
      isNoSpend
        ? `${formatMonthDay(date)} 已记录无消费`
        : `${formatMonthDay(date)} 收入${formatDetailMoney(totals.income, "income")} 支出${formatDetailMoney(totals.expense)}`,
    );

    const number = document.createElement("span");
    number.className = "month-day-number";
    number.textContent = String(day);

    const amounts = document.createElement("span");
    amounts.className = "month-day-amounts";

    if (hasIncome) {
      const income = document.createElement("span");
      income.className = "month-day-income";
      income.textContent = formatDetailMoney(totals.income, "income");
      amounts.append(income);
    }

    if (hasExpense) {
      const expense = document.createElement("span");
      expense.className = "month-day-expense";
      expense.textContent = `-${formatDetailMoney(totals.expense)}`;
      amounts.append(expense);
    }

    if (isNoSpend) {
      const noSpend = document.createElement("span");
      noSpend.className = "month-day-no-spend";
      noSpend.textContent = "无消费";
      amounts.append(noSpend);
    } else if (!hasRecords) {
      const empty = document.createElement("span");
      empty.className = "month-day-empty";
      empty.textContent = "·";
      amounts.append(empty);
    }

    dayButton.append(number, amounts);
    fragment.append(dayButton);
  }

  monthDetailGrid.replaceChildren(fragment);
}

function shiftMonthDetail(monthOffset) {
  monthDetailViewDate = new Date(
    monthDetailViewDate.getFullYear(),
    monthDetailViewDate.getMonth() + monthOffset,
    1,
  );
  renderMonthDetail();
}

function resetMonthDetailToCurrent() {
  monthDetailViewDate = new Date(today.getFullYear(), today.getMonth(), 1);
  renderMonthDetail();
}

function openMonthDetail() {
  if (!hasMonthDetail) {
    return;
  }

  const selectedDate = getSelectedDate();
  monthDetailViewDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
  monthDetailMode = "calendar";
  renderMonthDetail();
  monthDetailSheet.hidden = false;

  requestAnimationFrame(() => {
    appScreen.dataset.monthDetailOpen = "true";
    monthDetailClose.focus();
  });
}

function closeMonthDetail() {
  if (!hasMonthDetail) {
    return;
  }

  appScreen.dataset.monthDetailOpen = "false";

  window.setTimeout(() => {
    monthDetailSheet.hidden = true;
  }, 180);
}

function getSelectedDate() {
  return fromDateKey(selectedDateKey);
}

function getSelectedDateState() {
  const selectedDate = getSelectedDate();

  if (isTodayDate(selectedDate)) {
    return "today";
  }

  return isPastDate(selectedDate) ? "past" : "future";
}

function getSelectedDateModeText() {
  const state = getSelectedDateState();

  if (isNoSpendDay(selectedDateKey)) {
    return "已记无消费";
  }

  if (state === "today") {
    return "可记账";
  }

  if (state === "past") {
    return "可补记";
  }

  return "可预记";
}

function updateSelectedDateContext() {
  const selectedDate = getSelectedDate();
  const state = getSelectedDateState();
  const dateText = state === "today" ? "今天" : formatEntryDate(selectedDate);

  selectedDateText.textContent = dateText;
  selectedDateMode.textContent = getSelectedDateModeText();
  recordButton.textContent = state === "past" ? "补记" : "记账";
  appScreen.dataset.selectedDate = state;

  if (appScreen.dataset.sheetOpen === "true") {
    syncEntryDateContext();
  }
}

function renderPendingEntryMode() {
  entryForm.classList.toggle("is-pending-entry", isPendingEntry);
  entryPendingToggle.classList.toggle("is-active", isPendingEntry);
  entryPendingToggle.setAttribute("aria-pressed", String(isPendingEntry));
  parseButton.textContent = isPendingEntry ? "先记下" : "确定";
  syncEntryDateContext();
}

function setPendingEntryMode(isPending) {
  isPendingEntry = Boolean(isPending);
  formError.textContent = "";
  if (isPendingEntry) {
    selectedEntryQuantity = 1;
    renderEntryQuantity();
  }
  renderPendingEntryMode();
  expenseInput.focus();
}

function syncEntryDateContext() {
  const selectedDate = getSelectedDate();
  const state = getSelectedDateState();
  const dateText = state === "today" ? "今天" : formatEntryDate(selectedDate);
  const flowText = flowLabels[selectedEntryFlow];
  const currencyText = formatCurrencyLabel();

  if (isPendingEntry) {
    entryTitle.textContent = "先记下待确认账单";
    entryDateContext.textContent = `这笔${flowText}会先记到 ${dateText}，金额后补`;
    inputLabel.textContent = `先记下是什么${flowText}（金额稍后确认）`;
    expenseInput.placeholder = selectedEntryFlow === "income" ? "例如：报销款" : "例如：朋友A的晚餐";
    return;
  }

  entryTitle.textContent = state === "past" ? `补记${flowText}` : `快速记${flowText}`;
  entryDateContext.textContent =
    state === "past"
      ? `这笔${flowText}会补记到 ${dateText}`
      : `这笔${flowText}会记到 ${dateText}`;

  if (selectedEntryFlow === "income") {
    inputLabel.textContent =
      state === "past"
        ? `${formatMonthDay(selectedDate)}漏记了哪笔收入？（${currencyText}）`
        : `${dateText}收了什么？（${currencyText}）`;
    expenseInput.placeholder = "工资 5000";
    return;
  }

  inputLabel.textContent =
    state === "past"
      ? `${formatMonthDay(selectedDate)}漏记了什么？（${currencyText}）`
      : `${dateText}买了什么？（${currencyText}）`;
  expenseInput.placeholder = "地铁 2.9*2";
}

function getFallbackCategory(flow = selectedEntryFlow) {
  return {
    name: "其他",
    icon: flow === "income" ? "💰" : "📦",
    keywords: [],
  };
}

function getEntryCategoryOptions(flow = selectedEntryFlow) {
  const categories = flow === "income" ? incomeCategories : expenseCategories;

  if (categories.some((category) => category.name === "其他")) {
    return categories;
  }

  return [...categories, getFallbackCategory(flow)];
}

function getSelectedEntryCategory() {
  return getEntryCategoryOptions().find((category) => category.name === selectedEntryCategory) || null;
}

function formatCategoryLabel(category) {
  return `${category.icon} ${category.name}`;
}

function renderEntryCategoryCards() {
  const fragment = document.createDocumentFragment();
  const categories = getEntryCategoryOptions();

  categories.forEach((category) => {
    const card = document.createElement("button");
    const isActive = category.name === selectedEntryCategory;

    card.className = "entry-category-card";
    card.classList.toggle("is-active", isActive);
    card.type = "button";
    card.dataset.category = category.name;
    card.setAttribute("role", "option");
    card.setAttribute("aria-selected", String(isActive));

    const visual = document.createElement("span");
    visual.className = "entry-category-visual";
    visual.textContent = category.icon;
    visual.setAttribute("aria-hidden", "true");

    const label = document.createElement("span");
    label.className = "entry-category-name";
    label.textContent = category.name;

    card.append(visual, label);
    fragment.append(card);
  });

  entryCategoryGrid.replaceChildren(fragment);
}

function setEntryCategory(categoryName) {
  const category = getEntryCategoryOptions().find((item) => item.name === categoryName);

  if (!category) {
    return;
  }

  selectedEntryCategory = category.name;
  formError.textContent = "";
  renderEntryCategoryCards();
}

function renderEntryQuantity() {
  entryQuantityValue.textContent = `×${selectedEntryQuantity}`;
  entryQuantityDecrease.disabled = selectedEntryQuantity <= 1;
  entryQuantityIncrease.disabled = selectedEntryQuantity >= 99;
  entryQuantityHint.textContent =
    selectedEntryQuantity > 1
      ? `输入单价，总金额会按 ×${selectedEntryQuantity} 计算`
      : `也可直接输入：地铁 2.9*2`;
}

function setEntryQuantity(quantity) {
  selectedEntryQuantity = normalizeQuantity(quantity);
  formError.textContent = "";
  renderEntryQuantity();
}

function renderEntryFlowOptions() {
  entryFlowOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.entryFlow === selectedEntryFlow);
  });
  appScreen.dataset.entryFlow = selectedEntryFlow;
  renderEntryCategoryCards();
  renderEntryProjectOptions();
  renderEntryQuantity();
  renderQuickExamples();
  syncEntryDateContext();
}

function renderQuickExamples() {
  const examples = quickExampleSets[selectedEntryFlow] || quickExampleSets.expense;

  quickExamples.forEach((button, index) => {
    const example = examples[index];
    button.textContent = example.label;
    button.dataset.example = example.value;
    button.dataset.category = example.category;
  });
}

function setEntryFlow(flow) {
  if (!flowLabels[flow] || selectedEntryFlow === flow) {
    return;
  }

  selectedEntryFlow = flow;
  selectedEntryCategory = "";
  resetEntry();
  renderEntryFlowOptions();
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1500);
}

function toggleMonthPopover(forceOpen) {
  const willOpen =
    typeof forceOpen === "boolean" ? forceOpen : monthPopover.hasAttribute("hidden");

  monthToggle.setAttribute("aria-expanded", String(willOpen));
  monthPopover.toggleAttribute("hidden", !willOpen);
}

function updateMonthOptions() {
  const selectedDate = getSelectedDate();
  const monthDates = [-1, 0, 1].map((offset) => {
    return new Date(selectedDate.getFullYear(), selectedDate.getMonth() + offset, 1);
  });

  monthOptions.forEach((option, index) => {
    const monthDate = monthDates[index];
    option.textContent = formatMonth(monthDate);
    option.dataset.year = String(monthDate.getFullYear());
    option.dataset.month = String(monthDate.getMonth());
    option.classList.toggle(
      "is-active",
      isSameMonth(selectedDate, monthDate.getFullYear(), monthDate.getMonth()),
    );
  });
}

function buildDateStrip(centerDate = today) {
  const fragment = document.createDocumentFragment();

  for (let offset = -60; offset <= 45; offset += 1) {
    const date = addDays(centerDate, offset);
    const dateKey = toDateKey(date);
    const button = document.createElement("button");
    button.className = "date-item";
    button.type = "button";
    button.role = "option";
    button.dataset.dateKey = dateKey;
    button.setAttribute("aria-selected", String(dateKey === selectedDateKey));
    button.setAttribute("aria-label", formatDateLabel(date));
    button.classList.toggle("is-selected", dateKey === selectedDateKey);
    button.classList.toggle("is-no-spend", isNoSpendDay(dateKey));

    const dateNumber = document.createElement("span");
    dateNumber.className = "date-number";
    dateNumber.textContent = formatDay(date);

    const dot = document.createElement("span");
    dot.className = "date-dot";
    dot.setAttribute("aria-hidden", "true");

    const weekday = document.createElement("span");
    weekday.className = "weekday";
    weekday.textContent = formatWeekday(date);

    button.append(dateNumber, dot, weekday);
    fragment.append(button);
  }

  dateStrip.replaceChildren(fragment);
  updateMonthOptions();
  scrollSelectedDateIntoView(false);
}

function scrollSelectedDateIntoView(smooth = true) {
  const selectedItem = dateStrip.querySelector(".date-item.is-selected");
  selectedItem?.scrollIntoView({
    behavior: smooth ? "smooth" : "auto",
    block: "nearest",
    inline: "center",
  });
}

function selectDate(dateKey, shouldToast = true) {
  selectedDateKey = dateKey;

  const dateExistsInStrip = [...dateStrip.querySelectorAll(".date-item")].some(
    (dateItem) => dateItem.dataset.dateKey === selectedDateKey,
  );

  if (!dateExistsInStrip) {
    buildDateStrip(getSelectedDate());
  }

  dateStrip.querySelectorAll(".date-item").forEach((dateItem) => {
    const isSelected = dateItem.dataset.dateKey === selectedDateKey;
    dateItem.classList.toggle("is-selected", isSelected);
    dateItem.setAttribute("aria-selected", String(isSelected));
  });

  updateMonthOptions();
  updateSelectedDateContext();
  renderLedger();
  scrollSelectedDateIntoView();

  if (appScreen.dataset.monthDetailOpen === "true") {
    renderMonthDetail();
  }

  if (shouldToast) {
    showToast(formatDateLabel(getSelectedDate()));
  }
}

function openSheet() {
  selectedEntryFlow = "expense";
  selectedEntryCategory = "";
  selectedEntryQuantity = 1;
  isPendingEntry = false;
  const activeProjects = getProjectsForDate(selectedDateKey);
  selectedEntryProjectId = activeProjects.length === 1 ? activeProjects[0].id : "";
  renderEntryFlowOptions();
  renderPendingEntryMode();
  syncEntryDateContext();
  sheet.hidden = false;
  requestAnimationFrame(() => {
    appScreen.dataset.sheetOpen = "true";
    expenseInput.focus();
  });
}

function closeSheet() {
  appScreen.dataset.sheetOpen = "false";
  window.setTimeout(() => {
    sheet.hidden = true;
    resetEntry();
  }, 260);
}

function resetEntry() {
  parsedExpense = null;
  selectedEntryCategory = "";
  selectedEntryQuantity = 1;
  isPendingEntry = false;
  entryForm.hidden = false;
  confirmCard.hidden = true;
  formError.textContent = "";
  expenseInput.value = "";
  renderEntryCategoryCards();
  renderEntryProjectOptions();
  renderEntryQuantity();
  renderPendingEntryMode();
}

function normalizeRecordText(value) {
  return value.toLowerCase().replace(/\s+/g, "");
}

function getCategoryIcon(categoryLabel) {
  const categoryName = normalizeCategoryName(categoryLabel);
  const category = [
    ...expenseCategories,
    ...incomeCategories,
    getFallbackCategory("expense"),
    getFallbackCategory("income"),
  ].find((item) => item.name === categoryName);

  return category?.icon || "•";
}

function classifyRecord(note, flow = selectedEntryFlow) {
  const categories = flow === "income" ? incomeCategories : expenseCategories;
  const normalizedNote = normalizeRecordText(note);
  let category = null;
  let bestScore = 0;

  categories.forEach((item) => {
    const score = item.keywords.reduce((total, keyword) => {
      const normalizedKeyword = normalizeRecordText(keyword);

      if (!normalizedKeyword || !normalizedNote.includes(normalizedKeyword)) {
        return total;
      }

      return total + Math.max(normalizedKeyword.length, 1);
    }, 0);

    if (score > bestScore) {
      bestScore = score;
      category = item;
    }
  });

  category ||= { name: "其他", icon: flow === "income" ? "💰" : "📦" };

  return `${category.icon} ${category.name}`;
}

function parseExpense(rawValue) {
  const value = rawValue.trim().replace(/[，。]/g, " ");
  const multiplierMatch = value.match(/(\d+(?:\.\d{1,2})?)\s*[*xX×]\s*(\d{1,2})/);
  const amountMatch = multiplierMatch || value.match(/(\d+(?:\.\d{1,2})?)/);

  if (!amountMatch) {
    return null;
  }

  const unitAmount = Number(amountMatch[1]);
  const explicitQuantity = multiplierMatch ? Number(multiplierMatch[2]) : null;
  const quantity = multiplierMatch ? explicitQuantity : selectedEntryQuantity;
  const inputAmount = unitAmount * quantity;
  const note = value
    .replace(amountMatch[0], "")
    .replace(/(?:HK|A|C|S)?[$￥¥€£₩]|元|块/gi, "")
    .trim();

  if (
    !note ||
    !Number.isFinite(unitAmount) ||
    unitAmount <= 0 ||
    !Number.isInteger(quantity) ||
    quantity < 1 ||
    quantity > 99 ||
    !Number.isFinite(inputAmount)
  ) {
    return null;
  }

  const selectedDate = getSelectedDate();
  const selectedCategory = getSelectedEntryCategory();
  const selectedProject = getSelectedEntryProject();

  return {
    note,
    amount: toBaseCurrency(inputAmount),
    inputAmount,
    inputCurrency: selectedCurrency,
    unitAmount: toBaseCurrency(unitAmount),
    quantity,
    category: selectedCategory ? formatCategoryLabel(selectedCategory) : classifyRecord(note),
    flow: selectedEntryFlow,
    dateKey: selectedDateKey,
    dateLabel: formatDateLabel(selectedDate),
    time: formatDateLabel(selectedDate),
    projectId: selectedProject?.id || "",
    projectName: selectedProject?.name || "",
  };
}

function parsePendingExpense(rawValue) {
  const note = rawValue.trim().replace(/\s+/g, " ");

  if (!note) {
    return null;
  }

  const selectedDate = getSelectedDate();
  const selectedCategory = getSelectedEntryCategory();
  const selectedProject = getSelectedEntryProject();

  return {
    note,
    amount: 0,
    inputAmount: 0,
    inputCurrency: selectedCurrency,
    unitAmount: 0,
    quantity: 1,
    category: selectedCategory ? formatCategoryLabel(selectedCategory) : classifyRecord(note),
    flow: selectedEntryFlow,
    dateKey: selectedDateKey,
    dateLabel: formatDateLabel(selectedDate),
    time: formatDateLabel(selectedDate),
    projectId: selectedProject?.id || "",
    projectName: selectedProject?.name || "",
    isPendingAmount: true,
  };
}

function renderConfirm(expense) {
  parsedExpense = expense;
  confirmNote.textContent = expense.note;
  confirmCategory.textContent = expense.category;
  confirmProject.textContent = expense.projectName || "不计入项目";
  confirmAmount.textContent = formatDetailMoney(expense.amount, expense.flow);
  confirmCalculation.textContent =
    expense.quantity > 1
      ? `${formatDetailMoney(expense.unitAmount)} × ${expense.quantity} = ${formatDetailMoney(expense.amount)}`
      : "1 份";
  confirmTime.textContent = expense.time;
  entryForm.hidden = true;
  confirmCard.hidden = false;
}

function renderDailyTotals(records) {
  const incomeTotal = getFlowTotal(records, "income");
  const expenseTotal = getFlowTotal(records, "expense");
  const balanceTotal = incomeTotal - expenseTotal;

  dailyIncomeTotal.textContent = formatDetailMoney(incomeTotal, "income");
  dailyExpenseTotal.textContent = formatDetailMoney(expenseTotal);
  dailyBalanceTotal.textContent = formatDetailBalanceMoney(balanceTotal);
  dailyBalanceTotal.classList.toggle("is-negative", balanceTotal < 0);
}

function renderLedger() {
  const selectedRecords = getSelectedDateRecords()
    .sort((a, b) => Number(b.id || 0) - Number(a.id || 0));

  const fragment = document.createDocumentFragment();
  renderCurrencyControls();
  renderDailyTotals(selectedRecords);
  renderProjectStatus();

  if (selectedRecords.length && isNoSpendDay(selectedDateKey)) {
    const noSpendStatus = document.createElement("div");
    noSpendStatus.className = "ledger-no-spend-status";

    const statusText = document.createElement("span");
    statusText.textContent = "✓ 当天无消费";

    const undoButton = document.createElement("button");
    undoButton.type = "button";
    undoButton.textContent = "撤销";
    undoButton.addEventListener("click", toggleSelectedNoSpendDay);

    noSpendStatus.append(statusText, undoButton);
    fragment.append(noSpendStatus);
  }

  if (!selectedRecords.length) {
    const isMarkedNoSpend = isNoSpendDay(selectedDateKey);
    const empty = document.createElement("div");
    empty.className = "ledger-empty";
    empty.classList.toggle("is-no-spend", isMarkedNoSpend);

    if (isMarkedNoSpend) {
      const icon = document.createElement("span");
      icon.className = "ledger-no-spend-icon";
      icon.textContent = "✓";
      icon.setAttribute("aria-hidden", "true");
      empty.append(icon);
    }

    const date = document.createElement("span");
    date.textContent = isMarkedNoSpend
      ? getSelectedDateState() === "today"
        ? "今天已确认无消费"
        : `${formatEntryDate(getSelectedDate())} 已确认无消费`
      : getSelectedDateState() === "today"
        ? "今天暂无明细"
        : `${formatEntryDate(getSelectedDate())} 暂无明细`;

    const hint = document.createElement("strong");
    hint.textContent = isMarkedNoSpend
      ? "这天的账已经对上了"
      : getSelectedDateState() === "past"
        ? "点下方补记一笔"
        : "点下方记一笔";

    empty.append(date, hint);

    if (getSelectedDateState() !== "future") {
      const noSpendButton = document.createElement("button");
      noSpendButton.className = "ledger-no-spend-button";
      noSpendButton.type = "button";
      noSpendButton.textContent = isMarkedNoSpend ? "撤销无消费标记" : "确认这天无消费";
      noSpendButton.addEventListener("click", toggleSelectedNoSpendDay);
      empty.append(noSpendButton);
    }

    fragment.append(empty);
  }

  selectedRecords.forEach((record) => {
    const item = document.createElement("button");
    item.className = "ledger-item";
    item.type = "button";
    item.dataset.recordId = String(record.id);
    item.dataset.flow = getRecordFlow(record);
    item.classList.toggle("is-pending", record.isPendingAmount);
    item.setAttribute(
      "aria-label",
      record.isPendingAmount
        ? `补充金额 ${record.note}`
        : `打开撤回确认 ${record.note} ${formatDetailMoney(Number(record.amount) || 0, getRecordFlow(record))}`,
    );
    item.addEventListener("click", (event) => {
      event.stopPropagation();
      if (record.isPendingAmount) {
        openPendingAmountDialog(record.id);
      } else {
        openWithdrawDialog(record.id);
      }
    });

    const visual = document.createElement("span");
    visual.className = "ledger-visual";
    visual.textContent = getCategoryIcon(record.category);
    visual.setAttribute("aria-hidden", "true");

    const main = document.createElement("div");
    main.className = "ledger-main";

    const note = document.createElement("div");
    note.className = "ledger-note";
    note.textContent = record.note;

    const meta = document.createElement("div");
    meta.className = "ledger-meta";

    const category = document.createElement("span");
    category.className = "ledger-category";
    category.textContent = record.category;

    if (record.isBackfilled) {
      const backfillBadge = document.createElement("span");
      backfillBadge.className = "ledger-backfill";
      backfillBadge.textContent = "补记";
      meta.append(backfillBadge);
    }

    if (record.isPendingAmount) {
      const pendingBadge = document.createElement("span");
      pendingBadge.className = "ledger-pending";
      pendingBadge.textContent = "金额待确认";
      meta.append(pendingBadge);
    }

    if (record.projectName || record.projectId) {
      const projectBadge = document.createElement("span");
      const linkedProject = getProjectById(record.projectId);
      projectBadge.className = "ledger-project";
      projectBadge.textContent = record.projectName || linkedProject?.name || "项目";
      if (linkedProject?.color) {
        projectBadge.style.setProperty("--project-color", linkedProject.color);
      }
      meta.append(projectBadge);
    }

    const time = document.createElement("span");
    time.textContent = `${record.dateLabel} ${record.recordTime}`;

    const calculationText = record.isPendingAmount ? "" : getRecordCalculation(record);
    const calculation = document.createElement("span");
    calculation.className = "ledger-quantity";
    calculation.textContent = calculationText;

    const amount = document.createElement("div");
    amount.className = "ledger-amount";
    amount.textContent = record.isPendingAmount
      ? "点此补金额"
      : formatDetailMoney(Number(record.amount) || 0, getRecordFlow(record));

    meta.append(category);
    if (calculationText) {
      meta.append(calculation);
    }
    meta.append(time);
    main.append(note, meta);
    item.append(visual, main, amount);
    fragment.append(item);
  });

  ledgerList.replaceChildren(fragment);
}

function openRecordAction(recordId) {
  const targetRecord = readRecords().find((record) => String(record.id) === String(recordId));

  if (!targetRecord) {
    return;
  }

  if (targetRecord.isPendingAmount) {
    openPendingAmountDialog(recordId);
    return;
  }

  openWithdrawDialog(recordId);
}

function openPendingAmountDialog(recordId) {
  const targetRecord = readRecords().find((record) => String(record.id) === String(recordId));

  if (!targetRecord?.isPendingAmount) {
    return;
  }

  activePendingRecordId = String(recordId);
  pendingAmountTitle.textContent = targetRecord.note;
  pendingAmountSummary.textContent = `${targetRecord.dateLabel} · ${targetRecord.category}${
    targetRecord.projectName ? ` · ${targetRecord.projectName}` : ""
  }`;
  pendingAmountCurrency.textContent = formatCurrencyLabel(targetRecord.inputCurrency || selectedCurrency);
  pendingAmountInput.value = "";
  pendingAmountError.textContent = "";
  pendingAmountDialog.hidden = false;

  requestAnimationFrame(() => {
    appScreen.dataset.pendingAmountOpen = "true";
    pendingAmountInput.focus();
  });
}

function closePendingAmountDialog() {
  appScreen.dataset.pendingAmountOpen = "false";

  window.setTimeout(() => {
    pendingAmountDialog.hidden = true;
    pendingAmountInput.value = "";
    pendingAmountError.textContent = "";
    activePendingRecordId = null;
  }, 180);
}

function confirmPendingAmount() {
  const inputAmount = Number(pendingAmountInput.value);

  if (!Number.isFinite(inputAmount) || inputAmount <= 0) {
    pendingAmountError.textContent = "请输入大于 0 的最终金额";
    pendingAmountInput.focus();
    return;
  }

  const records = readRecords();
  const targetIndex = records.findIndex(
    (record) => String(record.id) === String(activePendingRecordId),
  );

  if (targetIndex < 0) {
    closePendingAmountDialog();
    return;
  }

  const targetRecord = records[targetIndex];
  const amount = toBaseCurrency(inputAmount);
  records[targetIndex] = {
    ...targetRecord,
    amount,
    inputAmount,
    inputCurrency: targetRecord.inputCurrency || selectedCurrency,
    unitAmount: amount,
    quantity: 1,
    isPendingAmount: false,
    amountConfirmedAt: new Date().toISOString(),
  };

  writeRecords(records);
  closePendingAmountDialog();
  renderLedger();
  if (activeTab === "数据") {
    renderDataView();
  }
  if (activeTab === "资产") {
    renderAssetsView();
  }
  if (appScreen.dataset.monthDetailOpen === "true") {
    renderMonthDetail();
  }
  if (appScreen.dataset.projectDetailOpen === "true") {
    renderProjectDetail();
  }
  showToast(`已补充 ${targetRecord.note} ${formatDetailMoney(amount, getRecordFlow(targetRecord))}`);
}

function removePendingRecord() {
  const recordId = activePendingRecordId;
  closePendingAmountDialog();

  if (recordId) {
    withdrawRecord(recordId);
  }
}

function openWithdrawDialog(recordId) {
  const targetRecord = readRecords().find((record) => String(record.id) === String(recordId));

  if (!targetRecord) {
    return;
  }

  pendingWithdrawId = String(recordId);
  pendingProjectWithdrawId = null;
  withdrawTitle.textContent = "撤回这笔记账？";
  withdrawSummary.textContent = `${targetRecord.note}${
    getRecordCalculation(targetRecord) ? ` · ${getRecordCalculation(targetRecord)}` : ""
  } · ${formatDetailMoney(Number(targetRecord.amount) || 0, getRecordFlow(targetRecord))}`;
  withdrawConfirm.textContent = "是";
  withdrawDialog.hidden = false;

  requestAnimationFrame(() => {
    appScreen.dataset.withdrawOpen = "true";
    withdrawCancel.focus();
  });
}

function openProjectWithdrawDialog(projectId) {
  const project = getProjectById(projectId);

  if (!project) {
    return;
  }

  const recordCount = getProjectRecords(project.id).length;
  pendingWithdrawId = null;
  pendingProjectWithdrawId = project.id;
  withdrawTitle.textContent = "撤回整个项目？";
  withdrawSummary.textContent = `“${project.name}”将被移除，其中 ${recordCount} 笔收支会保留为普通明细。`;
  withdrawConfirm.textContent = "撤回项目";
  withdrawDialog.hidden = false;

  requestAnimationFrame(() => {
    appScreen.dataset.withdrawOpen = "true";
    withdrawCancel.focus();
  });
}

function closeWithdrawDialog() {
  appScreen.dataset.withdrawOpen = "false";

  window.setTimeout(() => {
    withdrawDialog.hidden = true;
    withdrawSummary.textContent = "";
    pendingWithdrawId = null;
    pendingProjectWithdrawId = null;
  }, 180);
}

function setActiveTab(tabName) {
  activeTab = tabName;
  appScreen.dataset.activeTab = tabName;

  quickTabs.forEach((tab) => {
    tab.classList.toggle("is-current", tab.dataset.tab === tabName);
  });

  dataView.hidden = tabName !== "数据";
  assetsView.hidden = tabName !== "资产";

  if (tabName === "数据") {
    renderDataView();
  }

  if (tabName === "资产") {
    renderAssetsView();
  }

  if (tabName !== "明细" && appScreen.dataset.monthDetailOpen === "true") {
    closeMonthDetail();
  }
  if (tabName !== "明细" && appScreen.dataset.projectDetailOpen === "true") {
    closeProjectDetail();
  }
}

function openReportDialog() {
  renderReport();
  reportDialog.hidden = false;

  requestAnimationFrame(() => {
    appScreen.dataset.reportOpen = "true";
    reportClose.focus();
  });
}

function closeReportDialog() {
  appScreen.dataset.reportOpen = "false";

  window.setTimeout(() => {
    reportDialog.hidden = true;
  }, 180);
}

function withdrawRecord(recordId) {
  const records = readRecords();
  const targetRecord = records.find((record) => String(record.id) === String(recordId));

  if (!targetRecord) {
    return;
  }

  writeRecords(records.filter((record) => String(record.id) !== String(recordId)));
  renderLedger();
  if (activeTab === "数据") {
    renderDataView();
  }
  if (activeTab === "资产") {
    renderAssetsView();
  }
  if (appScreen.dataset.monthDetailOpen === "true") {
    renderMonthDetail();
  }
  if (appScreen.dataset.projectDetailOpen === "true") {
    renderProjectDetail();
  }
  showToast(
    targetRecord.isPendingAmount
      ? `已撤回待确认账单“${targetRecord.note}”`
      : `已撤回 ${formatDetailMoney(Number(targetRecord.amount) || 0, getRecordFlow(targetRecord))}`,
  );
}

function withdrawProject(projectId) {
  const project = getProjectById(projectId);

  if (!project) {
    return;
  }

  const records = readRecords();
  const linkedRecordCount = records.filter(
    (record) => String(record.projectId || "") === String(project.id),
  ).length;
  const unlinkedRecords = records.map((record) => {
    if (String(record.projectId || "") !== String(project.id)) {
      return record;
    }

    return {
      ...record,
      projectId: "",
      projectName: "",
    };
  });

  writeProjects(readProjects().filter((item) => item.id !== project.id));
  writeRecords(unlinkedRecords);

  if (selectedEntryProjectId === project.id) {
    selectedEntryProjectId = "";
  }

  closeProjectDetail();
  renderEntryProjectOptions();
  renderLedger();
  showToast(`已撤回项目“${project.name}”，保留 ${linkedRecordCount} 笔明细`);
}

function saveExpense() {
  if (!parsedExpense) {
    return;
  }

  const savedExpense = {
    ...parsedExpense,
    id: Date.now(),
    createdAt: new Date().toISOString(),
    isBackfilled: isPastDate(fromDateKey(parsedExpense.dateKey)),
    recordTime: formatClock(new Date()),
  };

  writeRecords([savedExpense, ...readRecords()]);
  if (savedExpense.flow === "expense" && isNoSpendDay(savedExpense.dateKey)) {
    setNoSpendDay(savedExpense.dateKey, false);
    buildDateStrip(getSelectedDate());
    updateSelectedDateContext();
  }
  renderLedger();
  if (activeTab === "数据") {
    renderDataView();
  }
  if (activeTab === "资产") {
    renderAssetsView();
  }
  if (appScreen.dataset.monthDetailOpen === "true") {
    renderMonthDetail();
  }
  closeSheet();
  if (savedExpense.isPendingAmount) {
    showToast(`已记下“${savedExpense.note}”，等账单后再补金额`);
    return;
  }
  const toastPrefix = savedExpense.isBackfilled ? "已补记" : "已记账";
  showToast(`${toastPrefix}${flowLabels[savedExpense.flow]} ${savedExpense.dateLabel} ${formatDetailMoney(savedExpense.amount, savedExpense.flow)}`);
}

function selectMonth(year, month) {
  const matchingDateItems = [...dateStrip.querySelectorAll(".date-item")].filter((dateItem) => {
    const date = fromDateKey(dateItem.dataset.dateKey);
    return isSameMonth(date, year, month);
  });

  const selectedCandidate =
    matchingDateItems.find((dateItem) => dateItem.dataset.dateKey === selectedDateKey) ||
    matchingDateItems[0];

  if (selectedCandidate) {
    selectDate(selectedCandidate.dataset.dateKey);
    return;
  }

  showToast(`${year}年${month + 1}月`);
}

function stopDateDrag(event) {
  if (!isDraggingDates) {
    return;
  }

  const shouldSelectTap = event?.type !== "pointercancel" && dateTapCandidate && dragDistance <= 16;

  dateStrip.classList.remove("is-dragging");
  isDraggingDates = false;

  if (event?.pointerId !== undefined && dateStrip.hasPointerCapture?.(event.pointerId)) {
    dateStrip.releasePointerCapture(event.pointerId);
  }

  if (shouldSelectTap) {
    suppressDateClick = true;
    selectDate(dateTapCandidate);
    window.setTimeout(() => {
      suppressDateClick = false;
    }, 0);
    dateTapCandidate = null;
    return;
  }

  if (dragDistance > 16) {
    suppressDateClick = true;
    window.setTimeout(() => {
      suppressDateClick = false;
    }, 0);
  }

  dateTapCandidate = null;
}

updatePreviewScale();
buildDateStrip();
updateSelectedDateContext();
renderEntryFlowOptions();
renderLedger();
setActiveTab(activeTab);
window.addEventListener("resize", updatePreviewScale);

monthToggle.addEventListener("click", () => toggleMonthPopover());

monthOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const year = Number(option.dataset.year);
    const month = Number(option.dataset.month);
    toggleMonthPopover(false);
    selectMonth(year, month);
  });
});

dateStrip.addEventListener("click", (event) => {
  if (suppressDateClick) {
    return;
  }

  const dateItem = event.target.closest(".date-item");
  if (!dateItem) {
    return;
  }

  selectDate(dateItem.dataset.dateKey);
});

dateStrip.addEventListener("pointerdown", (event) => {
  if (event.button !== 0) {
    return;
  }

  isDraggingDates = true;
  dragStartX = event.clientX;
  dragStartScroll = dateStrip.scrollLeft;
  dragDistance = 0;
  dateTapCandidate = event.target.closest(".date-item")?.dataset.dateKey || null;
  dateStrip.classList.add("is-dragging");
  dateStrip.setPointerCapture(event.pointerId);
});

dateStrip.addEventListener("pointermove", (event) => {
  if (!isDraggingDates) {
    return;
  }

  const deltaX = event.clientX - dragStartX;
  dragDistance = Math.max(dragDistance, Math.abs(deltaX));
  dateStrip.scrollLeft = dragStartScroll - deltaX;
});

dateStrip.addEventListener("pointerup", stopDateDrag);
dateStrip.addEventListener("pointercancel", stopDateDrag);
dateStrip.addEventListener("wheel", (event) => {
  if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
    dateStrip.scrollLeft += event.deltaY;
  }
});

ledgerList.addEventListener("click", (event) => {
  const ledgerItem = event.target.closest(".ledger-item");

  if (!ledgerItem) {
    return;
  }

  openRecordAction(ledgerItem.dataset.recordId);
});

projectStatusList.addEventListener("click", (event) => {
  const card = event.target.closest(".project-status-card");

  if (card) {
    openProjectDetail(card.dataset.projectId);
  }
});

projectDetailRecords.addEventListener("click", (event) => {
  const record = event.target.closest(".project-detail-record");

  if (record) {
    openRecordAction(record.dataset.recordId);
  }
});

projectDetailWithdraw.addEventListener("click", () => {
  if (activeProjectDetailId) {
    openProjectWithdrawDialog(activeProjectDetailId);
  }
});

recordButton.addEventListener("click", openSheet);
sheetBackdrop.addEventListener("click", closeSheet);
sheetClose.addEventListener("click", closeSheet);
pendingAmountBackdrop.addEventListener("click", closePendingAmountDialog);
pendingAmountCancel.addEventListener("click", closePendingAmountDialog);
pendingAmountSave.addEventListener("click", confirmPendingAmount);
pendingAmountRemove.addEventListener("click", removePendingRecord);
withdrawBackdrop.addEventListener("click", closeWithdrawDialog);
withdrawCancel.addEventListener("click", closeWithdrawDialog);
withdrawConfirm.addEventListener("click", () => {
  if (!pendingWithdrawId && !pendingProjectWithdrawId) {
    return;
  }

  const recordId = pendingWithdrawId;
  const projectId = pendingProjectWithdrawId;
  closeWithdrawDialog();

  if (projectId) {
    withdrawProject(projectId);
    return;
  }

  withdrawRecord(recordId);
});

reportButton.addEventListener("click", openReportDialog);
reportBackdrop.addEventListener("click", closeReportDialog);
reportClose.addEventListener("click", closeReportDialog);

if (hasMonthDetail) {
  monthDetailButton.addEventListener("click", (event) => {
    event.stopPropagation();
    openMonthDetail();
  });
  monthDetailBackdrop.addEventListener("click", closeMonthDetail);
  monthDetailClose.addEventListener("click", closeMonthDetail);
  monthDetailPrevious.addEventListener("click", () => shiftMonthDetail(-1));
  monthDetailNext.addEventListener("click", () => shiftMonthDetail(1));
  monthDetailCurrent.addEventListener("click", resetMonthDetailToCurrent);
  monthDetailViewOptions.forEach((option) => {
    option.addEventListener("click", () => setMonthDetailMode(option.dataset.monthView));
  });
  monthDetailGrid.addEventListener("click", (event) => {
    const day = event.target.closest(".month-day");

    if (!day) {
      return;
    }

    selectDate(day.dataset.dateKey);
    closeMonthDetail();
  });
  monthFlowList.addEventListener("click", (event) => {
    const record = event.target.closest(".month-flow-record");

    if (record) {
      openRecordAction(record.dataset.recordId);
    }
  });
}

currencySwitches.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleCurrencyPopover(button);
  });
});
currencyPopovers.forEach((popover) => {
  popover.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});
currencyOptions.forEach((option) => {
  option.addEventListener("click", () => selectCurrency(option.dataset.currency));
});
budgetButton.addEventListener("click", updateMonthlyBudget);
backupExportButton.addEventListener("click", exportBackup);
backupImportButton.addEventListener("click", () => backupFileInput.click());
backupFileInput.addEventListener("change", () => importBackup(backupFileInput.files?.[0]));

flowOptions.forEach((option) => {
  option.addEventListener("click", () => {
    selectedFlow = option.dataset.flow;
    renderDataView();
  });
});

periodOptions.forEach((option) => {
  option.addEventListener("click", () => {
    selectedPeriod = option.dataset.period;
    renderDataView();
  });
});

quickTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveTab(tab.dataset.tab);
  });
});

entryFlowOptions.forEach((option) => {
  option.addEventListener("click", () => {
    setEntryFlow(option.dataset.entryFlow);
  });
});

entryCategoryGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".entry-category-card");

  if (!card) {
    return;
  }

  setEntryCategory(card.dataset.category);
  expenseInput.focus();
});

entryQuantityDecrease.addEventListener("click", () => {
  setEntryQuantity(selectedEntryQuantity - 1);
  expenseInput.focus();
});

entryQuantityIncrease.addEventListener("click", () => {
  setEntryQuantity(selectedEntryQuantity + 1);
  expenseInput.focus();
});

entryPendingToggle.addEventListener("click", () => {
  setPendingEntryMode(!isPendingEntry);
});

entryProjectOptions.addEventListener("click", (event) => {
  const option = event.target.closest(".entry-project-option");

  if (!option) {
    return;
  }

  setEntryProject(option.dataset.projectId);
});

createProjectButton.addEventListener("click", openProjectEditor);
projectEditorBackdrop.addEventListener("click", closeProjectEditor);
projectEditorClose.addEventListener("click", closeProjectEditor);
projectEditorForm.addEventListener("submit", saveProject);
projectDetailBackdrop.addEventListener("click", closeProjectDetail);
projectDetailClose.addEventListener("click", closeProjectDetail);

quickExamples.forEach((button) => {
  button.addEventListener("click", () => {
    expenseInput.value = button.dataset.example;
    setEntryCategory(button.dataset.category);
    expenseInput.focus();
  });
});

entryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formError.textContent = "";

  const expense = isPendingEntry
    ? parsePendingExpense(expenseInput.value)
    : parseExpense(expenseInput.value);
  if (!expense) {
    formError.textContent = isPendingEntry
      ? "请先输入这笔账是什么，例如：朋友A的晚餐"
      : "请输入“事项 + 单价”，例如：地铁 2.9*2";
    expenseInput.focus();
    return;
  }

  parsedExpense = expense;
  saveExpense();
});

editResult.addEventListener("click", () => {
  confirmCard.hidden = true;
  entryForm.hidden = false;
  expenseInput.focus();
});

saveResult.addEventListener("click", saveExpense);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && appScreen.dataset.pendingAmountOpen === "true") {
    closePendingAmountDialog();
    return;
  }

  if (event.key === "Escape" && appScreen.dataset.withdrawOpen === "true") {
    closeWithdrawDialog();
    return;
  }

  if (event.key === "Escape" && appScreen.dataset.projectEditorOpen === "true") {
    closeProjectEditor();
    return;
  }

  if (event.key === "Escape" && appScreen.dataset.projectDetailOpen === "true") {
    closeProjectDetail();
    return;
  }

  if (event.key === "Escape" && appScreen.dataset.reportOpen === "true") {
    closeReportDialog();
    return;
  }

  if (event.key === "Escape" && appScreen.dataset.monthDetailOpen === "true") {
    closeMonthDetail();
    return;
  }

  if (event.key === "Escape" && appScreen.dataset.sheetOpen === "true") {
    closeSheet();
  }

  if (event.key === "Enter" && !confirmCard.hidden && appScreen.dataset.sheetOpen === "true") {
    event.preventDefault();
    saveExpense();
  }

  if (
    event.key === "Enter" &&
    appScreen.dataset.pendingAmountOpen === "true" &&
    document.activeElement === pendingAmountInput
  ) {
    event.preventDefault();
    confirmPendingAmount();
  }
});

document.addEventListener("click", () => {
  closeCurrencyPopovers();
});
