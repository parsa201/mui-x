import {
  DesktopDateTimePickerProps,
  DesktopDateTimePickerSlots,
  DesktopDateTimePickerSlotProps,
} from '../DesktopDateTimePicker';
import { DateOrTimeViewWithMeridiem } from '../internals/models';
import {
  MobileDateTimePickerProps,
  MobileDateTimePickerSlots,
  MobileDateTimePickerSlotProps,
} from '../MobileDateTimePicker';
import { PickerValidDate } from '../models';

export interface DateTimePickerSlots<TDate extends PickerValidDate>
  extends DesktopDateTimePickerSlots<TDate>,
    MobileDateTimePickerSlots<TDate, DateOrTimeViewWithMeridiem> {}

export interface DateTimePickerSlotProps<TDate extends PickerValidDate>
  extends DesktopDateTimePickerSlotProps<TDate>,
    MobileDateTimePickerSlotProps<TDate, DateOrTimeViewWithMeridiem> {}

export interface DateTimePickerProps<TDate extends PickerValidDate>
  extends DesktopDateTimePickerProps<TDate>,
    Omit<MobileDateTimePickerProps<TDate, DateOrTimeViewWithMeridiem>, 'views'> {
  /**
   * CSS media query when `Mobile` mode will be changed to `Desktop`.
   * @default '@media (pointer: fine)'
   * @example '@media (min-width: 720px)' or theme.breakpoints.up("sm")
   */
  desktopModeMediaQuery?: string;
  /**
   * Years rendered per row.
   * @default 4 on desktop, 3 on mobile
   */
  yearsPerRow?: 3 | 4;
  /**
   * Overridable component slots.
   * @default {}
   */
  slots?: DateTimePickerSlots<TDate>;
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps?: DateTimePickerSlotProps<TDate>;
}
