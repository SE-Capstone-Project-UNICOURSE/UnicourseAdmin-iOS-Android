class helpers {
  public formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  public formatDateToVN(dateString: string): string {
    const options = {year: 'numeric', month: 'long', day: 'numeric'} as const;
    return new Date(dateString).toLocaleDateString('vi-VN', options);
  }

  public formatCurrencyVND(amount: number): string {
    return amount.toLocaleString('vi-VN');
  }

  public formatDuration = (totalMinutes: number) => {
    if (totalMinutes >= 1440) {
      const days = Math.floor(totalMinutes / 1440);
      const remainingHours = Math.floor((totalMinutes % 1440) / 60);
      return `${days}d ${remainingHours}h`;
    } else if (totalMinutes >= 60) {
      const hours = Math.floor(totalMinutes / 60);
      const remainingMinutes = totalMinutes % 60;
      return `${hours}h ${remainingMinutes}m`;
    } else {
      return `${totalMinutes}m`;
    }
  };

  getDayOfWeek = (dateString: string): string => {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const date = new Date(dateString);

    const dayIndex = date.getDay();

    return daysOfWeek[dayIndex];
  };
}

export default new helpers();
