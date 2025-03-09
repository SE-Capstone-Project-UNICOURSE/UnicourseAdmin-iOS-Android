import helpers from '@app/shared/utils/helpers';

describe('helpers', () => {
  describe('formatDate', () => {
    it('should format a Date object to a YYYY-MM-DD string', () => {
      const date = new Date('2024-12-21');
      expect(helpers.formatDate(date)).toBe('2024-12-21');
    });
  });

  describe('formatDateToVN', () => {
    it('should format a date string to Vietnamese locale date format', () => {
      const dateString = '2024-12-21';
      expect(helpers.formatDateToVN(dateString)).toBe('21 tháng 12, 2024');
    });
  });

  describe('formatCurrencyVND', () => {
    it('should format a number to VND currency format', () => {
      expect(helpers.formatCurrencyVND(1000000)).toBe('1.000.000');
      expect(helpers.formatCurrencyVND(500)).toBe('500');
    });
  });

  describe('formatDuration', () => {
    it('should format total minutes to days and hours when >= 1440', () => {
      expect(helpers.formatDuration(2880)).toBe('2d 0h');
      expect(helpers.formatDuration(1500)).toBe('1d 1h');
    });

    it('should format total minutes to hours and minutes when >= 60 but < 1440', () => {
      expect(helpers.formatDuration(125)).toBe('2h 5m');
      expect(helpers.formatDuration(60)).toBe('1h 0m');
    });

    it('should format total minutes to just minutes when < 60', () => {
      expect(helpers.formatDuration(45)).toBe('45m');
      expect(helpers.formatDuration(1)).toBe('1m');
    });
  });

  describe('getDayOfWeek', () => {
    it('should return the correct day of the week for a given date string', () => {
      expect(helpers.getDayOfWeek('2024-12-21')).toBe('Saturday');
      expect(helpers.getDayOfWeek('2024-12-22')).toBe('Sunday');
      expect(helpers.getDayOfWeek('2024-12-23')).toBe('Monday');
    });
  });
});
