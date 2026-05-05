/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { useForm } from '@formspree/react';
import { SITE } from '../config/site';

export function useContactForm() {
  const [selectedPackage, setSelectedPackage] = useState('');
  const formRef = useRef<HTMLDivElement>(null);
  const [state, submitToFormspree] = useForm(SITE.formspreeId);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    await submitToFormspree(formData);
  };

  useEffect(() => {
    if (state.succeeded) {
      setSelectedPackage('');
    }
  }, [state.succeeded]);

  return {
    selectedPackage,
    setSelectedPackage,
    formSubmitted: state.succeeded,
    submitting: state.submitting,
    formRef,
    handleSubmit,
  };
}
