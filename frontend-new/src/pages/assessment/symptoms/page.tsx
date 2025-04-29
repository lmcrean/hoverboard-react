"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/src/components/ui/!to-migrate/button";
import { Card, CardContent } from "@/src/components/ui/!to-migrate/card";
import { Checkbox } from "@/src/components/ui/!to-migrate/checkbox";
import { Input } from "@/src/components/ui/!to-migrate/input";
import { ChevronRight, ChevronLeft, InfoIcon } from "lucide-react";
import UserIcon from "@/src/components/navigation/UserIcon";
import { useQuickNavigate } from "@/src/hooks/useQuickNavigate";
import PageTransition from "../page-transitions";

export default function SymptomsPage() {
  const [physicalSymptoms, setPhysicalSymptoms] = useState<string[]>([]);
  const [emotionalSymptoms, setEmotionalSymptoms] = useState<string[]>([]);
  const [otherSymptoms, setOtherSymptoms] = useState("");
  const [refTarget, setRefTarget] = useState("");
  const symptomRef = useRef<HTMLDivElement | null>(null);
  const continueButtonRef = useRef<HTMLButtonElement | null>(null);
  const { isQuickResponse } = useQuickNavigate();

  useEffect(() => {
    if (!isQuickResponse) return;
    const symptomsList = [
      { id: "bloating", label: "Bloating", emoji: "🫃" },
      { id: "breast-tenderness", label: "Breast tenderness", emoji: "🤱" },
      { id: "headaches", label: "Headaches", emoji: "🤕" },
      { id: "back-pain", label: "Back pain", emoji: "⬇️" },
      { id: "nausea", label: "Nausea", emoji: "🤢" },
      { id: "fatigue", label: "Fatigue", emoji: "😴" },
      { id: "dizziness", label: "Dizziness", emoji: "💫" },
      { id: "acne", label: "Acne", emoji: "😖" },
      { id: "digestive-issues", label: "Digestive issues", emoji: "🚽" },
      { id: "sleep-disturbances", label: "Sleep disturbances", emoji: "🛌" },
      { id: "hot-flashes", label: "Hot flashes", emoji: "🔥" },
      { id: "joint-pain", label: "Joint pain", emoji: "🦴" },
      { id: "irritability", label: "Irritability", emoji: "😠" },
      { id: "mood-swings", label: "Mood swings", emoji: "🙂😢" },
      { id: "anxiety", label: "Anxiety", emoji: "😰" },
      { id: "depression", label: "Depression", emoji: "😔" },
      {
        id: "difficulty-concentrating",
        label: "Difficulty concentrating",
        emoji: "🧠",
      },
      { id: "food-cravings", label: "Food cravings", emoji: "🍫" },
      {
        id: "emotional-sensitivity",
        label: "Emotional sensitivity",
        emoji: "💔",
      },
      { id: "low-energy", label: "Low energy/motivation", emoji: "⚡" },
    ];

    const random =
      symptomsList[Math.floor(Math.random() * symptomsList.length)].id;
    setRefTarget(random);


  }, [isQuickResponse]);

  useEffect(() => {
    if (!refTarget) return;

    const timeout = setTimeout(() => {
      if (symptomRef.current) {
        symptomRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }

      togglePhysicalSymptom(refTarget);
    }, 100); // or 1000

    const continueTimeout = setTimeout(() => {
      if (continueButtonRef.current) {
        continueButtonRef.current.click();
      }
    }, 200);

    return () => {
      clearTimeout(timeout);
      clearTimeout(continueTimeout);
    };
  }, [refTarget]);

  const togglePhysicalSymptom = (symptom: string) => {
    setPhysicalSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  const toggleEmotionalSymptom = (symptom: string) => {
    setEmotionalSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleContinue = () => {
    // Combine all symptoms
    const allSymptoms = [
      ...physicalSymptoms.map((id) => {
        const symptom = [
          { id: "bloating", label: "Bloating" },
          { id: "breast-tenderness", label: "Breast tenderness" },
          { id: "headaches", label: "Headaches" },
          { id: "back-pain", label: "Back pain" },
          { id: "nausea", label: "Nausea" },
          { id: "fatigue", label: "Fatigue" },
          { id: "dizziness", label: "Dizziness" },
          { id: "acne", label: "Acne" },
          { id: "digestive-issues", label: "Digestive issues" },
          { id: "sleep-disturbances", label: "Sleep disturbances" },
          { id: "hot-flashes", label: "Hot flashes" },
          { id: "joint-pain", label: "Joint pain" },
        ].find((s) => s.id === id);
        return symptom?.label || id;
      }),
      ...emotionalSymptoms.map((id) => {
        const symptom = [
          { id: "irritability", label: "Irritability" },
          { id: "mood-swings", label: "Mood swings" },
          { id: "anxiety", label: "Anxiety" },
          { id: "depression", label: "Depression" },
          { id: "difficulty-concentrating", label: "Difficulty concentrating" },
          { id: "food-cravings", label: "Food cravings" },
          { id: "emotional-sensitivity", label: "Emotional sensitivity" },
          { id: "low-energy", label: "Low energy/motivation" },
        ].find((s) => s.id === id);
        return symptom?.label || id;
      }),
      ...(otherSymptoms ? [otherSymptoms] : []),
    ];

    // Save to sessionStorage
    sessionStorage.setItem("symptoms", JSON.stringify(allSymptoms));
  };

  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col">

        <main className="flex-1 flex flex-col p-6 max-w-5xl mx-auto w-full">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-500">100% Complete</div>
          </div>


          <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
            <div className="bg-pink-500 h-2 rounded-full w-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            <div className="lg:w-1/2 flex items-top justify-center lg:justify-start text-center lg:text-left">
              <div className="flex flex-col gap-3">
                <h1 className="text-xl dark:text-slate-100 font-bold mb-2">Question 6 of 6</h1>
                <h2 className="text-3xl dark:text-slate-100 font-semibold mb-1">Do you experience any other symptoms with your period?</h2>
                <p className="text-sm text-gray-500 dark:text-slate-200 mb-6">
                  Select all that apply. These could occur before, during, or after your
                  period.
                </p>
                <img src="/assessmentAssets/othersymptoms.svg" alt="" className="filter contrast-125 hover:scale-105 transition duration-300" />

              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-base dark:text-slate-100 text-center font-medium mb-3">Physical symptoms</h3>
            <div className="grid grid-cols-2 gap-3 dark:text-slate-200">
              {[
                { id: "bloating", label: "Bloating", emoji: "🫃" },
                {
                  id: "breast-tenderness",
                  label: "Breast tenderness",
                  emoji: "🤱",
                },
                { id: "headaches", label: "Headaches", emoji: "🤕" },
                { id: "back-pain", label: "Back pain", emoji: "⬇️" },
                { id: "nausea", label: "Nausea", emoji: "🤢" },
                { id: "fatigue", label: "Fatigue", emoji: "😴" },
                { id: "dizziness", label: "Dizziness", emoji: "💫" },
                { id: "acne", label: "Acne", emoji: "😖" },
                {
                  id: "digestive-issues",
                  label: "Digestive issues",
                  emoji: "🚽",
                },
                {
                  id: "sleep-disturbances",
                  label: "Sleep disturbances",
                  emoji: "🛌",
                },
                { id: "hot-flashes", label: "Hot flashes", emoji: "🔥" },
                { id: "joint-pain", label: "Joint pain", emoji: "🦴" },
              ].map((symptom) => (
                <div
                  key={symptom.id}
                  className={`flex flex-col items-center justify-center border dark:border-slate-800 rounded-lg p-3 cursor-pointer transition-all duration-300 dark:hover:text-gray-900  ${
                    physicalSymptoms.includes(symptom.id)
                      ? "bg-pink-50 border-pink-300 dark:text-gray-900"
                      : "hover:bg-gray-50"
                  }`}
                  ref={refTarget === symptom.id ? symptomRef : null}
                  onClick={() => togglePhysicalSymptom(symptom.id)}
                >
                  <span className="text-2xl mb-1">{symptom.emoji}</span>
                  <span className="text-sm text-center">{symptom.label}</span>
                  <Checkbox
                    id={`physical-${symptom.id}`}
                    checked={physicalSymptoms.includes(symptom.id)}
                    onCheckedChange={() => togglePhysicalSymptom(symptom.id)}
                    className="sr-only"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-base dark:text-slate-100 text-center font-medium mb-3">Emotional/Mood symptoms</h3>
            <div className="grid grid-cols-2 gap-3 dark:text-slate-200">
              {[
                { id: "irritability", label: "Irritability", emoji: "😠" },
                { id: "mood-swings", label: "Mood swings", emoji: "🙂😢" },
                { id: "anxiety", label: "Anxiety", emoji: "😰" },
                { id: "depression", label: "Depression", emoji: "😔" },
                {
                  id: "difficulty-concentrating",
                  label: "Difficulty concentrating",
                  emoji: "🧠",
                },
                { id: "food-cravings", label: "Food cravings", emoji: "🍫" },
                {
                  id: "emotional-sensitivity",
                  label: "Emotional sensitivity",
                  emoji: "💔",
                },
                { id: "low-energy", label: "Low energy/motivation", emoji: "⚡" },
              ].map((symptom) => (
                <div
                  key={symptom.id}
                  className={`flex flex-col items-center justify-center border dark:border-slate-800 rounded-lg p-3 cursor-pointer transition-all duration-300 dark:hover:text-gray-900 ${
                    emotionalSymptoms.includes(symptom.id)
                      ? "bg-pink-50 border-pink-300 dark:text-gray-900"
                      : "hover:bg-gray-50"
                  }`}
                  ref={refTarget === symptom.id ? symptomRef : null}
                  onClick={() => toggleEmotionalSymptom(symptom.id)}
                >
                  <span className="text-2xl mb-1">{symptom.emoji}</span>
                  <span className="text-sm text-center">{symptom.label}</span>
                  <Checkbox
                    id={`emotional-${symptom.id}`}
                    checked={emotionalSymptoms.includes(symptom.id)}
                    onCheckedChange={() => toggleEmotionalSymptom(symptom.id)}
                    className="sr-only"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Other symptoms not listed?</h3>
            <Input
              placeholder="Type any other symptoms here..."
              value={otherSymptoms}
              onChange={(e) => setOtherSymptoms(e.target.value)}
            />
          </div>

          <Card className="w-full mb-8 bg-pink-50 border-pink-100 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="flex gap-2">
                <InfoIcon className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    About Period Symptoms
                  </h3>
                  <p className="text-sm text-gray-600">
                    It's normal to experience several symptoms during your
                    menstrual cycle. Hormonal fluctuations can affect your body in
                    many ways beyond just bleeding.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    However, symptoms that significantly interfere with daily life
                    are not normal and may indicate conditions like PMDD
                    (Premenstrual Dysphoric Disorder) or other reproductive health
                    issues.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Tracking these symptoms can help your healthcare provider make
                    better assessments.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-xs text-center text-gray-500 mb-4">
            Your data is private and secure. Dottie does not store your personal
            health information.
          </p>

          <div className="flex justify-between w-full mt-auto">
            <Link to="/assessment/pain">
              <Button
                variant="outline"
                className="flex items-center dark:bg-gray-900 dark:text-pink-600 dark:hover:text-pink-700 px-6 py-6 text-lg"
              >
                <ChevronLeft className="h-5 w-5 mr-2" />
                Back
              </Button>
            </Link>

            <Link to="/assessment/results" onClick={handleContinue}>
              <Button
                className="flex items-center px-6 py-6 text-lg bg-pink-600 hover:bg-pink-700 text-white"
                ref={continueButtonRef}
              >
                Finish Assessment
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </main>
      </div>
    </PageTransition>
  );
}