import {
  useUtils,
  useField,
  splitFieldInternalAndForwardedProps,
} from '@mui/x-date-pickers/internals';
import { PickerValidDate } from '@mui/x-date-pickers/models';
import {
  UseSingleInputTimeRangeFieldComponentProps,
  UseSingleInputTimeRangeFieldDefaultizedProps,
  UseSingleInputTimeRangeFieldProps,
} from './SingleInputTimeRangeField.types';
import { rangeValueManager, rangeFieldValueManager } from '../internals/utils/valueManagers';
import { validateTimeRange } from '../internals/utils/validation/validateTimeRange';

export const useDefaultizedTimeRangeFieldProps = <
  TDate extends PickerValidDate,
  AdditionalProps extends {},
>(
  props: UseSingleInputTimeRangeFieldProps<TDate>,
): UseSingleInputTimeRangeFieldDefaultizedProps<TDate, AdditionalProps> => {
  const utils = useUtils<TDate>();

  const ampm = props.ampm ?? utils.is12HourCycleInCurrentLocale();
  const defaultFormat = ampm ? utils.formats.fullTime12h : utils.formats.fullTime24h;

  return {
    ...props,
    disablePast: props.disablePast ?? false,
    disableFuture: props.disableFuture ?? false,
    format: props.format ?? defaultFormat,
  } as any;
};

export const useSingleInputTimeRangeField = <TDate extends PickerValidDate, TChildProps extends {}>(
  inProps: UseSingleInputTimeRangeFieldComponentProps<TDate, TChildProps>,
) => {
  const props = useDefaultizedTimeRangeFieldProps<TDate, TChildProps>(inProps);

  const { forwardedProps, internalProps } = splitFieldInternalAndForwardedProps<
    typeof props,
    keyof UseSingleInputTimeRangeFieldProps<any>
  >(props, 'time');

  return useField({
    forwardedProps,
    internalProps,
    valueManager: rangeValueManager,
    fieldValueManager: rangeFieldValueManager,
    validator: validateTimeRange,
    valueType: 'time',
  });
};
