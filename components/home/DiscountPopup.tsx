"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const DISCOUNT_KEY = "hasSeenDiscountPopup";

export default function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasSeen = localStorage.getItem(DISCOUNT_KEY);
    if (!hasSeen) {
      setIsOpen(true);
      localStorage.setItem(DISCOUNT_KEY, "true");
    }
  }, []);

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle className="text-red-600 font-bold text-xl">
        🎉 خصم 50% لفترة محدودة!
      </DialogTitle>
      <DialogContent className="text-gray-700">
        سارع بالحصول على العرض قبل انتهائه. العرض ساري فقط لمدة محدودة!
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained" color="primary">
          فهمت!
        </Button>
      </DialogActions>
    </Dialog>
  );
}
