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
const currencySwitch = document.querySelector(".currency-switch");
const currencyCode = document.querySelector(".currency-code");
const currencyPopover = document.querySelector(".currency-popover");
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
const sheet = document.querySelector(".entry-sheet");
const sheetBackdrop = document.querySelector(".sheet-backdrop");
const sheetClose = document.querySelector(".sheet-close");
const entryTitle = document.querySelector("#entry-title");
const entryDateContext = document.querySelector(".entry-date-context");
const entryForm = document.querySelector(".entry-form");
const entryFlowOptions = document.querySelectorAll(".entry-flow-option");
const entryCategoryGrid = document.querySelector(".entry-category-grid");
const inputLabel = document.querySelector(".input-label");
const expenseInput = document.querySelector(".expense-input");
const formError = document.querySelector(".form-error");
const quickExamples = document.querySelectorAll(".quick-examples button");
const confirmCard = document.querySelector(".confirm-card");
const confirmNote = document.querySelector(".confirm-note");
const confirmCategory = document.querySelector(".confirm-category");
const confirmAmount = document.querySelector(".confirm-amount");
const confirmTime = document.querySelector(".confirm-time");
const editResult = document.querySelector(".edit-result");
const saveResult = document.querySelector(".save-result");
const withdrawBackdrop = document.querySelector(".withdraw-backdrop");
const withdrawDialog = document.querySelector(".withdraw-dialog");
const withdrawSummary = document.querySelector(".withdraw-summary");
const withdrawCancel = document.querySelector(".withdraw-cancel");
const withdrawConfirm = document.querySelector(".withdraw-confirm");

const storageKey = "bookkeeping-records";
const currencyStorageKey = "bookkeeping-currency";
const budgetStorageKey = "bookkeeping-monthly-budgets";
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
  CNY: { name: "人民币", symbol: "¥", rate: 1, decimals: 2 },
  USD: { name: "美元", symbol: "$", rate: 0.14, decimals: 2 },
  EUR: { name: "欧元", symbol: "€", rate: 0.13, decimals: 2 },
  JPY: { name: "日元", symbol: "¥", rate: 22, decimals: 0 },
  HKD: { name: "港币", symbol: "HK$", rate: 1.09, decimals: 2 },
};
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
    { label: "打车 25", value: "打车 25", category: "交通" },
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
let activeTab = "明细";
let selectedFlow = "expense";
let selectedEntryFlow = "expense";
let selectedEntryCategory = "";
let selectedPeriod = "week";
let selectedCurrency = readSelectedCurrency();

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
  return `￥${amount.toLocaleString("zh-CN", {
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

function fromBaseCurrency(amount) {
  return amount * getCurrencyProfile().rate;
}

function toBaseCurrency(amount) {
  return amount / getCurrencyProfile().rate;
}

function formatAssetMoney(amount) {
  const profile = getCurrencyProfile();
  const convertedAmount = fromBaseCurrency(amount);
  const sign = convertedAmount < 0 ? "-" : "";
  const absoluteAmount = Math.abs(convertedAmount).toLocaleString("zh-CN", {
    minimumFractionDigits: profile.decimals,
    maximumFractionDigits: profile.decimals,
  });

  return `${sign}${profile.symbol}${absoluteAmount}`;
}

function formatAssetInputAmount(amount) {
  const profile = getCurrencyProfile();

  return fromBaseCurrency(amount).toLocaleString("zh-CN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: profile.decimals,
  });
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

    return {
      ...record,
      id: record.id || `${toDateKey(recordDate)}-${record.note}-${record.amount}-${recordTime}`,
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

function writeMonthlyBudget(amount) {
  const budgets = readMonthlyBudgets();
  budgets[getBudgetMonthKey()] = Math.max(0, amount);

  try {
    window.localStorage.setItem(budgetStorageKey, JSON.stringify(budgets));
  } catch {
    storageAvailable = false;
  }
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

function getFlowTotal(records, flow) {
  return records
    .filter((record) => getRecordFlow(record) === flow)
    .reduce((sum, record) => sum + Number(record.amount || 0), 0);
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
  const labelEvery = selectedPeriod === "month" ? 5 : 1;
  const labels = points
    .filter((point, index) => {
      return (
        selectedPeriod !== "month" ||
        index === 0 ||
        index === points.length - 1 ||
        (index + 1) % labelEvery === 0 ||
        point.label === "今天"
      );
    })
    .map((point) => {
      return `<text x="${point.x}" y="158" text-anchor="middle" class="chart-label">${point.label}</text>`;
    })
    .join("");
  const circles = points
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
  cycleSubtitle.textContent = `总${flowText}：${formatPlainMoney(total)}元`;
  cycleAverage.textContent = `平均值：${formatPlainMoney(average)}元`;
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
  assetMonthIncome.textContent = formatAssetMoney(monthIncome);
  assetMonthExpense.textContent = formatAssetMoney(monthExpense);
  assetMonthBalance.textContent = formatAssetMoney(monthBalance);
  budgetRemaining.textContent = formatAssetMoney(remainingBudget);
  budgetTotal.textContent = formatAssetMoney(monthlyBudget);
  budgetSpent.textContent = formatAssetMoney(monthExpense);
  budgetPercent.textContent = `${Math.round(budgetRatio * 100)}%`;
  budgetRing.style.setProperty("--budget-sweep", `${Math.round(budgetRatio * 360)}deg`);
  budgetButton.lastChild.textContent = monthlyBudget > 0 ? " 调整预算" : " 设置预算";
  assetNet.textContent = formatAssetMoney(totalIncome - totalExpense);
  assetTotal.textContent = formatAssetMoney(totalIncome);
  assetLiability.textContent = formatAssetMoney(totalExpense);
  currencyCode.textContent = selectedCurrency;
  currencySwitch.setAttribute("aria-label", `更换币种，当前为${getCurrencyProfile().name}`);

  currencyOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.currency === selectedCurrency);
  });
}

function toggleCurrencyPopover(forceOpen) {
  const willOpen =
    typeof forceOpen === "boolean" ? forceOpen : currencyPopover.hasAttribute("hidden");

  currencySwitch.setAttribute("aria-expanded", String(willOpen));
  currencyPopover.toggleAttribute("hidden", !willOpen);
}

function selectCurrency(currency) {
  if (!currencyProfiles[currency]) {
    return;
  }

  selectedCurrency = currency;
  writeSelectedCurrency(currency);
  toggleCurrencyPopover(false);
  renderAssetsView();
  showToast(`已切换为${currencyProfiles[currency].name}`);
}

function updateMonthlyBudget() {
  const currentBudget = readMonthlyBudget();
  const promptValue = window.prompt(
    `请输入${today.getMonth() + 1}月预算（${selectedCurrency}）`,
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
      <p>${periodText}共记录 ${recordCount} 笔${flowText}，总${flowText} ${formatPlainMoney(total)} 元，周期平均值为 ${formatPlainMoney(average)} 元。${
        peakPoint.value > 0 ? `${peakPoint.label} 是峰值点，金额为 ${formatPlainMoney(peakPoint.value)} 元。` : `当前周期还没有可分析的${flowText}峰值。`
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

function syncEntryDateContext() {
  const selectedDate = getSelectedDate();
  const state = getSelectedDateState();
  const dateText = state === "today" ? "今天" : formatEntryDate(selectedDate);
  const flowText = flowLabels[selectedEntryFlow];

  entryTitle.textContent = state === "past" ? `补记${flowText}` : `快速记${flowText}`;
  entryDateContext.textContent =
    state === "past"
      ? `这笔${flowText}会补记到 ${dateText}`
      : `这笔${flowText}会记到 ${dateText}`;

  if (selectedEntryFlow === "income") {
    inputLabel.textContent =
      state === "past" ? `${formatMonthDay(selectedDate)}漏记了哪笔收入？` : `${dateText}收了什么？`;
    expenseInput.placeholder = "工资 5000";
    return;
  }

  inputLabel.textContent =
    state === "past" ? `${formatMonthDay(selectedDate)}漏记了什么？` : `${dateText}买了什么？`;
  expenseInput.placeholder = "海底捞 422";
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

function renderEntryFlowOptions() {
  entryFlowOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.entryFlow === selectedEntryFlow);
  });
  appScreen.dataset.entryFlow = selectedEntryFlow;
  renderEntryCategoryCards();
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

function buildDateStrip() {
  const fragment = document.createDocumentFragment();

  for (let offset = -60; offset <= 45; offset += 1) {
    const date = addDays(today, offset);
    const dateKey = toDateKey(date);
    const button = document.createElement("button");
    button.className = "date-item";
    button.type = "button";
    button.role = "option";
    button.dataset.dateKey = dateKey;
    button.setAttribute("aria-selected", String(dateKey === selectedDateKey));
    button.setAttribute("aria-label", formatDateLabel(date));
    button.classList.toggle("is-selected", dateKey === selectedDateKey);

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

  dateStrip.querySelectorAll(".date-item").forEach((dateItem) => {
    const isSelected = dateItem.dataset.dateKey === selectedDateKey;
    dateItem.classList.toggle("is-selected", isSelected);
    dateItem.setAttribute("aria-selected", String(isSelected));
  });

  updateMonthOptions();
  updateSelectedDateContext();
  renderLedger();
  scrollSelectedDateIntoView();

  if (shouldToast) {
    showToast(formatDateLabel(getSelectedDate()));
  }
}

function openSheet() {
  selectedEntryFlow = "expense";
  selectedEntryCategory = "";
  renderEntryFlowOptions();
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
  entryForm.hidden = false;
  confirmCard.hidden = true;
  formError.textContent = "";
  expenseInput.value = "";
  renderEntryCategoryCards();
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
  const amountMatch = value.match(/(\d+(?:\.\d{1,2})?)/);

  if (!amountMatch) {
    return null;
  }

  const amount = Number(amountMatch[1]);
  const note = value
    .replace(amountMatch[0], "")
    .replace(/[￥¥元块]/g, "")
    .trim();

  if (!note || !Number.isFinite(amount) || amount <= 0) {
    return null;
  }

  const selectedDate = getSelectedDate();
  const selectedCategory = getSelectedEntryCategory();

  return {
    note,
    amount,
    category: selectedCategory ? formatCategoryLabel(selectedCategory) : classifyRecord(note),
    flow: selectedEntryFlow,
    dateKey: selectedDateKey,
    dateLabel: formatDateLabel(selectedDate),
    time: formatDateLabel(selectedDate),
  };
}

function renderConfirm(expense) {
  parsedExpense = expense;
  confirmNote.textContent = expense.note;
  confirmCategory.textContent = expense.category;
  confirmAmount.textContent = formatRecordMoney(expense.amount, expense.flow);
  confirmTime.textContent = expense.time;
  entryForm.hidden = true;
  confirmCard.hidden = false;
}

function renderDailyTotals(records) {
  const incomeTotal = getFlowTotal(records, "income");
  const expenseTotal = getFlowTotal(records, "expense");
  const balanceTotal = incomeTotal - expenseTotal;

  dailyIncomeTotal.textContent = formatRecordMoney(incomeTotal, "income");
  dailyExpenseTotal.textContent = formatMoney(expenseTotal);
  dailyBalanceTotal.textContent = formatBalanceMoney(balanceTotal);
  dailyBalanceTotal.classList.toggle("is-negative", balanceTotal < 0);
}

function renderLedger() {
  const selectedRecords = getSelectedDateRecords()
    .sort((a, b) => Number(b.id || 0) - Number(a.id || 0));

  const fragment = document.createDocumentFragment();
  renderDailyTotals(selectedRecords);

  if (!selectedRecords.length) {
    const empty = document.createElement("div");
    empty.className = "ledger-empty";

    const date = document.createElement("span");
    date.textContent = getSelectedDateState() === "today" ? "今天暂无明细" : `${formatEntryDate(getSelectedDate())} 暂无明细`;

    const hint = document.createElement("strong");
    hint.textContent = getSelectedDateState() === "past" ? "点下方补记一笔" : "点下方记一笔";

    empty.append(date, hint);
    fragment.append(empty);
  }

  selectedRecords.forEach((record) => {
    const item = document.createElement("button");
    item.className = "ledger-item";
    item.type = "button";
    item.dataset.recordId = String(record.id);
    item.dataset.flow = getRecordFlow(record);
    item.setAttribute(
      "aria-label",
      `打开撤回确认 ${record.note} ${formatRecordMoney(Number(record.amount) || 0, getRecordFlow(record))}`,
    );
    item.addEventListener("click", (event) => {
      event.stopPropagation();
      openWithdrawDialog(record.id);
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

    const time = document.createElement("span");
    time.textContent = `${record.dateLabel} ${record.recordTime}`;

    const amount = document.createElement("div");
    amount.className = "ledger-amount";
    amount.textContent = formatRecordMoney(Number(record.amount) || 0, getRecordFlow(record));

    meta.append(category, time);
    main.append(note, meta);
    item.append(visual, main, amount);
    fragment.append(item);
  });

  ledgerList.replaceChildren(fragment);
}

function openWithdrawDialog(recordId) {
  const targetRecord = readRecords().find((record) => String(record.id) === String(recordId));

  if (!targetRecord) {
    return;
  }

  pendingWithdrawId = String(recordId);
  withdrawSummary.textContent = `${targetRecord.note} · ${formatRecordMoney(Number(targetRecord.amount) || 0, getRecordFlow(targetRecord))}`;
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
  showToast(`已撤回 ${formatRecordMoney(Number(targetRecord.amount) || 0, getRecordFlow(targetRecord))}`);
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
  renderLedger();
  if (activeTab === "数据") {
    renderDataView();
  }
  if (activeTab === "资产") {
    renderAssetsView();
  }
  closeSheet();
  const toastPrefix = savedExpense.isBackfilled ? "已补记" : "已记账";
  showToast(`${toastPrefix}${flowLabels[savedExpense.flow]} ${savedExpense.dateLabel} ${formatRecordMoney(savedExpense.amount, savedExpense.flow)}`);
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

  openWithdrawDialog(ledgerItem.dataset.recordId);
});

recordButton.addEventListener("click", openSheet);
sheetBackdrop.addEventListener("click", closeSheet);
sheetClose.addEventListener("click", closeSheet);
withdrawBackdrop.addEventListener("click", closeWithdrawDialog);
withdrawCancel.addEventListener("click", closeWithdrawDialog);
withdrawConfirm.addEventListener("click", () => {
  if (!pendingWithdrawId) {
    return;
  }

  const recordId = pendingWithdrawId;
  closeWithdrawDialog();
  withdrawRecord(recordId);
});

reportButton.addEventListener("click", openReportDialog);
reportBackdrop.addEventListener("click", closeReportDialog);
reportClose.addEventListener("click", closeReportDialog);
currencySwitch.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleCurrencyPopover();
});
currencyPopover.addEventListener("click", (event) => {
  event.stopPropagation();
});
currencyOptions.forEach((option) => {
  option.addEventListener("click", () => selectCurrency(option.dataset.currency));
});
budgetButton.addEventListener("click", updateMonthlyBudget);

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

  if (!selectedEntryCategory) {
    formError.textContent = "请先选择一个类别";
    entryCategoryGrid.focus();
    return;
  }

  const expense = parseExpense(expenseInput.value);
  if (!expense) {
    formError.textContent = "请按“事项 + 金额”输入，例如：海底捞 422";
    expenseInput.focus();
    return;
  }

  renderConfirm(expense);
});

editResult.addEventListener("click", () => {
  confirmCard.hidden = true;
  entryForm.hidden = false;
  expenseInput.focus();
});

saveResult.addEventListener("click", saveExpense);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && appScreen.dataset.reportOpen === "true") {
    closeReportDialog();
    return;
  }

  if (event.key === "Escape" && appScreen.dataset.withdrawOpen === "true") {
    closeWithdrawDialog();
    return;
  }

  if (event.key === "Escape" && appScreen.dataset.sheetOpen === "true") {
    closeSheet();
  }

  if (event.key === "Enter" && !confirmCard.hidden && appScreen.dataset.sheetOpen === "true") {
    event.preventDefault();
    saveExpense();
  }
});

document.addEventListener("click", () => {
  toggleCurrencyPopover(false);
});
