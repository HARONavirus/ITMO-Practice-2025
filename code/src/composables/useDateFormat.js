import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

export function useDateFormat(dateString) {
  const { locale } = useI18n();

  const formatDate = computed(() => {
    if (!dateString.value) {
      return '';
    }

    const date = new Date(dateString.value);

    if (isNaN(date.getTime())) {
      return 'Incorrect date';
    }

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };

    try {
      return new Intl.DateTimeFormat(locale.value, options).format(date);
    } catch (error) {
      console.error("Date formatting error:", error);
      return dateString.value;
    }
  });

  return {
    formatDate
  };
}