"use client";

import PageLayout from "@/components/page-layout/page-layout";
import FormConversor from "@/components/conversor/form-conversor/form-conversor";
import ResultConversor from "@/components/conversor/result-conversor/result-conversor";

export default function Home() {
  return (
    <PageLayout>
      <ResultConversor />
    </PageLayout>
  );
}
