import { format } from 'date-fns';

export function formatDate(dateString: string) {
  return format(new Date(dateString), 'eo MMM yyyy');
}

export function currencyFormat(num: number) {
  return '£' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '1,');
}
