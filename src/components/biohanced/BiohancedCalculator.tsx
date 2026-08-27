"use client";

import { FormEvent, useState } from "react";

type Kind = "bmi" | "bmr" | "calorie" | "protein" | "waistHip";

export function BiohancedCalculator({ kind }: { kind: Kind }) {
  const [result, setResult] = useState<string | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const num = (name: string) => Number(data.get(name) || 0);

    if (kind === "bmi") {
      const heightIn = num("height");
      const weightLb = num("weight");
      const meters = heightIn * 0.0254;
      const kg = weightLb * 0.453592;
      const bmi = meters > 0 ? kg / (meters * meters) : 0;
      setResult(`Your BMI is ${bmi.toFixed(1)}.`);
      return;
    }

    if (kind === "bmr") {
      const weight = num("weight") * 0.453592;
      const height = num("height") * 2.54;
      const age = num("age");
      const sex = String(data.get("sex") || "female");
      const bmr =
        sex === "male"
          ? 10 * weight + 6.25 * height - 5 * age + 5
          : 10 * weight + 6.25 * height - 5 * age - 161;
      setResult(`Estimated BMR: ${Math.round(bmr)} calories/day.`);
      return;
    }

    if (kind === "calorie") {
      const bmr = num("bmr") || 1600;
      const activity = num("activity") || 1.2;
      setResult(`Estimated daily need: ${Math.round(bmr * activity)} calories.`);
      return;
    }

    if (kind === "protein") {
      const weight = num("weight");
      setResult(`Target protein: ${Math.round(weight * 0.7)}–${Math.round(weight * 1)} g/day.`);
      return;
    }

    const waist = num("waist");
    const hip = num("hip");
    const ratio = hip > 0 ? waist / hip : 0;
    setResult(`Waist-to-hip ratio: ${ratio.toFixed(2)}.`);
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 max-w-md space-y-3">
      {kind === "bmi" || kind === "bmr" || kind === "protein" ? (
        <input
          name="weight"
          type="number"
          required
          placeholder="Weight (lb)"
          className="h-12 w-full rounded-lg border border-bio-neutral-200 px-4"
        />
      ) : null}
      {kind === "bmi" || kind === "bmr" ? (
        <input
          name="height"
          type="number"
          required
          placeholder="Height (in)"
          className="h-12 w-full rounded-lg border border-bio-neutral-200 px-4"
        />
      ) : null}
      {kind === "bmr" ? (
        <>
          <input
            name="age"
            type="number"
            required
            placeholder="Age"
            className="h-12 w-full rounded-lg border border-bio-neutral-200 px-4"
          />
          <select name="sex" className="h-12 w-full rounded-lg border border-bio-neutral-200 px-4">
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </>
      ) : null}
      {kind === "calorie" ? (
        <>
          <input
            name="bmr"
            type="number"
            placeholder="BMR (optional)"
            className="h-12 w-full rounded-lg border border-bio-neutral-200 px-4"
          />
          <select name="activity" className="h-12 w-full rounded-lg border border-bio-neutral-200 px-4">
            <option value="1.2">Sedentary</option>
            <option value="1.375">Lightly active</option>
            <option value="1.55">Moderately active</option>
            <option value="1.725">Very active</option>
          </select>
        </>
      ) : null}
      {kind === "waistHip" ? (
        <>
          <input
            name="waist"
            type="number"
            required
            placeholder="Waist (in)"
            className="h-12 w-full rounded-lg border border-bio-neutral-200 px-4"
          />
          <input
            name="hip"
            type="number"
            required
            placeholder="Hip (in)"
            className="h-12 w-full rounded-lg border border-bio-neutral-200 px-4"
          />
        </>
      ) : null}
      <button
        type="submit"
        className="rounded-full bg-bio-sage-500 px-6 py-3 text-sm font-semibold text-bio-white"
      >
        Calculate
      </button>
      {result ? <p className="text-bio-sage-500">{result}</p> : null}
    </form>
  );
}
