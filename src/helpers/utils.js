import { format } from 'date-fns';

export function formatDate(dateString) {
  return format(new Date(dateString), 'eo MMM yyyy');
}
