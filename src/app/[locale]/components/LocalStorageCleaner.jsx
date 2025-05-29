"use client";

import { useEffect } from "react";

export function LocalStorageCleaner() {
  useEffect(() => {
    const STORAGE_KEY = "lastClearDate";
    const FIRST_VISIT_KEY = "firstVisitDate";
    const TARGET_KEYS = ["destination", "experiences"];
    const INTERVAL_DAYS = 15;

    function daysBetween(date1, date2) {
      const msPerDay = 1000 * 60 * 60 * 24;
      return Math.floor((date2.getTime() - date1.getTime()) / msPerDay);
    }

    function shouldClear(lastDate) {
      const now = new Date();
      return daysBetween(lastDate, now) >= INTERVAL_DAYS;
    }

    try {
      let firstVisitDateStr = localStorage.getItem(FIRST_VISIT_KEY);
      if (!firstVisitDateStr) {
        const now = new Date().toISOString();
        localStorage.setItem(FIRST_VISIT_KEY, now);
        firstVisitDateStr = now;
      }

      const startDate = new Date(firstVisitDateStr);
      const lastClearDateStr = localStorage.getItem(STORAGE_KEY);

      if (!lastClearDateStr) {
        if (shouldClear(startDate)) {
          TARGET_KEYS.forEach((key) => localStorage.removeItem(key));
          localStorage.setItem(STORAGE_KEY, new Date().toISOString());
        } else {
          localStorage.setItem(STORAGE_KEY, startDate.toISOString());
        }
      } else {
        const lastClearDate = new Date(lastClearDateStr);
        if (shouldClear(lastClearDate)) {
          TARGET_KEYS.forEach((key) => localStorage.removeItem(key));
          localStorage.setItem(STORAGE_KEY, new Date().toISOString());
        }
      }
    } catch (error) {
      console.error("Error managing localStorage:", error);
    }
  }, []);

  return null;
}
