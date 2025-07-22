import { SvgIcon } from "@mui/material";
export function DropIcon(props) {
  const { rootStyle, ...rest } = props;

  const rootSx = {
    height: 24,
    width: 24,
    color: "#fff",
    stroke: "#e2e2e2",
    ...rootStyle,
  };
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      sx={rootSx}
      viewBox="0 0 24 24"
      {...rest}
    >
      <g data-name="Group 5083" strokeWidth={1}>
        <g
          data-name="Ellipse 39211"
          transform="rotate(-90 11.5 19.5) translate(7 8)"
          fill="currentColor"
          stroke="currenctStroke"
        >
          <circle cx={12} cy={12} r={12} stroke="none" />
          <circle cx={12} cy={12} r={11.5} fill="none" />
        </g>
        <path
          d="M21.505 15.84l-4.187 4.188 4.187 4.187a.476.476 0 11-.673.673l-4.524-4.524a.476.476 0 010-.673l4.524-4.524a.476.476 0 11.673.673z"
          fill="rgba(24,68,87,0.48)"
          stroke="rgba(24,68,87,0.48)"
          transform="rotate(-90 11.5 19.5)"
        />
      </g>
    </SvgIcon>
  );
}
export function DropUpIcon(props) {
  const { rootStyle, ...rest } = props;

  const rootSx = {
    height: 24,
    width: 24,
    color: "#fff",
    stroke: "#e2e2e2",
    ...rootStyle,
  };
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      sx={rootSx}
      viewBox="0 0 24 24"
      {...rest}
    >
      <g data-name="Group 90729" strokeWidth={1}>
        <g
          data-name="Ellipse 129089"
          fill="currentColor"
          stroke="currenctStroke"
          transform="rotate(90 12 12)"
        >
          <circle cx={12} cy={12} r={12} stroke="none" />
          <circle cx={12} cy={12} r={11.5} fill="none" />
        </g>
        <path
          d="M14.505 16.16l-4.188-4.188 4.188-4.187a.477.477 0 00-.674-.674l-4.524 4.525a.476.476 0 000 .673l4.524 4.524a.476.476 0 00.674-.673z"
          fill="rgba(24,68,87,0.48)"
          stroke="rgba(24,68,87,0.48)"
          transform="rotate(90 12 12)"
        />
      </g>
    </SvgIcon>
  );
}

export function EditIcon(props) {
  const { rootStyle, ...rest } = props;

  const rootSx = {
    height: 14,
    width: 14,
    color: "rgba(24,68,87,0.72)",
    ...rootStyle,
  };
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      sx={rootSx}
      viewBox="0 0 14 14"
      {...rest}
    >
      <path
        d="M16.425 5.01a2.571 2.571 0 00-1.824.752l-8.157 8.157a1.29 1.29 0 00-.328.559l-1.094 3.828a.553.553 0 00.683.683l3.83-1.089a1.292 1.292 0 00.557-.328l8.157-8.162a2.576 2.576 0 00-1.824-4.4zm0 1.1a1.468 1.468 0 011.042.435 1.465 1.465 0 010 2.084l-.715.715-2.084-2.086.715-.715a1.469 1.469 0 011.042-.434zm-2.539 1.93l2.085 2.085-6.661 6.66a.187.187 0 01-.08.047l-2.872.821.821-2.873a.18.18 0 01.047-.079z"
        transform="translate(-5.001 -5.01)"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

export const Logo = (props) => {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    height: 24,
    width: 24,
    color: "#e2e2e2",
    
    ...rootStyle,
  };
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      height={800}
      viewBox="0 0 15 15"
      sx={rootSx}
      {...rest}
    >
      <path d="M5.5 7A2.5 2.5 0 0 1 3 4.5v-2a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v2a3.49 3.49 0 0 0 1.51 2.87A4.41 4.41 0 0 1 5 10.5a3.5 3.5 0 1 0 7 0v-.57a2 2 0 1 0-1 0v.57a2.5 2.5 0 0 1-5 0 4.41 4.41 0 0 1 1.5-3.13A3.49 3.49 0 0 0 9 4.5v-2A1.5 1.5 0 0 0 7.5 1H7a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v2A2.5 2.5 0 0 1 5.5 7m6 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </SvgIcon>
  );
};

export const AppointmentListIcon = (props) => {
  const { rootStyle, ...rest } = props;

  const rootSx = {
    height: 24,
    width: 24,
    color: "#fff",
    ...rootStyle,
  };
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={24}
      height={24}
      viewBox="0 0 512 512"
      sx={rootSx}
      {...rest}
    >
      <path d="M384 221.091h-62.836l-27.927-62.836c-2.327-4.655-5.818-6.982-10.473-6.982-4.655 0-9.309 2.327-10.473 6.982l-51.2 116.364-22.109-46.545c-2.327-3.491-5.818-6.982-10.473-6.982H128c-6.982 0-11.636 4.655-11.636 11.636s4.655 11.636 11.636 11.636h52.364l30.255 62.836c2.327 3.491 5.818 6.982 10.473 6.982s8.145-2.327 10.473-6.982l51.2-115.2 20.945 46.545c1.164 3.491 5.818 5.818 10.473 5.818H384c6.982 0 11.636-4.655 11.636-11.636s-4.654-11.636-11.636-11.636z" />
      <path d="M407.273 34.909h-69.818c0-6.982-4.655-11.636-11.636-11.636h-29.091c-4.655 0-8.145-2.327-9.309-4.655C280.436 6.982 268.8 0 256 0s-24.436 6.982-30.255 18.618c-2.327 2.327-5.818 4.655-10.473 4.655h-29.091c-6.982 0-11.636 4.655-11.636 11.636v58.182c0 6.982 4.655 11.636 11.636 11.636h139.636c6.982 0 11.636-4.655 11.636-11.636 0-6.982-4.655-11.636-11.636-11.636h-128v-34.91h17.455c12.8 0 24.436-6.982 30.255-17.455 4.655-8.145 16.291-6.982 20.945 0 5.818 10.473 17.455 17.455 30.255 17.455h17.455c0 6.982 4.655 11.636 11.636 11.636h81.455c6.982 0 11.636 4.655 11.636 11.636V477.09c0 6.982-4.655 11.636-11.636 11.636H104.727c-6.982 0-11.636-4.655-11.636-11.636V69.818c0-6.982 4.655-11.636 11.636-11.636H128c6.982 0 11.636-4.655 11.636-11.636S134.982 34.909 128 34.909h-23.273c-19.782 0-34.909 15.127-34.909 34.909v407.273c0 19.782 15.127 34.909 34.909 34.909h302.545c19.782 0 34.909-15.127 34.909-34.909V69.818c.001-19.782-15.126-34.909-34.908-34.909z" />
      <path d="M279.273 372.364H128c-6.982 0-11.636 4.655-11.636 11.636s4.655 11.636 11.636 11.636h151.273c6.982 0 11.636-4.655 11.636-11.636s-4.654-11.636-11.636-11.636zM209.455 418.909H128c-6.982 0-11.636 4.655-11.636 11.636s4.655 11.636 11.636 11.636h81.455c6.982 0 11.636-4.655 11.636-11.636s-4.655-11.636-11.636-11.636z" />
    </SvgIcon>
  );
};

export const PrescriptionIcon = (props) => {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    height: 24,
    width: 24,
    color: "#fff",
    ...rootStyle,
  };
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="-64 0 512 512"
      sx={rootSx}
      {...rest}
    >
      <path d="m301.26 352 78.06-78.06c6.25-6.25 6.25-16.38 0-22.63l-22.63-22.63c-6.25-6.25-16.38-6.25-22.63 0L256 306.74l-83.96-83.96C219.31 216.8 256 176.89 256 128c0-53.02-42.98-96-96-96H16C7.16 32 0 39.16 0 48v256c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-80h18.75l128 128-78.06 78.06c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0L256 397.25l78.06 78.06c6.25 6.25 16.38 6.25 22.63 0l22.63-22.63c6.25-6.25 6.25-16.38 0-22.63L301.26 352zM64 96h96c17.64 0 32 14.36 32 32s-14.36 32-32 32H64V96z" />
    </SvgIcon>
  );
};
export const ScheduleIcon = (props) => {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    height: 24,
    width: 24,
    color: "#fff",
    // stroke: "#e2e2e2",
    ...rootStyle,
  };
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 16 16"
      sx={rootSx}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M6.5 0C2.922 0 0 2.922 0 6.5S2.922 13 6.5 13c.168 0 .336-.008.5-.02v-2.007c-.164.02-.332.027-.5.027C4.004 11 2 8.996 2 6.5S4.004 2 6.5 2a4.486 4.486 0 0 1 4.473 5h2.007c.012-.164.02-.332.02-.5C13 2.922 10.078 0 6.5 0zm0 3c-.277 0-.5.223-.5.5V6H4.5c-.277 0-.5.223-.5.5s.223.5.5.5h2c.277 0 .5-.223.5-.5v-3c0-.277-.223-.5-.5-.5zM11 8v3H8v2h3v3h2v-3h3v-2h-3V8zm0 0"
      />
    </SvgIcon>
  );
};

export const GoogleMeet = (props) => {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    height: 24,
    width: 24,
    color: "#fff",
    ...rootStyle,
  };
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 192 192"
      sx={rootSx}
      {...rest}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={12}
        d="M138 140V52c0-8.837-7.163-16-16-16H58.16L22 72.16V140c0 8.837 7.163 16 16 16h84c8.837 0 16-7.163 16-16Zm32-88v88l-32-28V80l32-28Z"
      />
    </SvgIcon>
  );
};
export function CloseIcon(props) {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 10.543,
    height: 10.534,
    ...rootStyle,
  };
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.543 16.534"
      sx={rootSx}
      {...rest}
    >
      <path
        d="M22.529 6.97a.972.972 0 00-.679.3l-6.6 6.6-6.6-6.6a.972.972 0 10-1.375 1.373l6.6 6.6-6.6 6.6a.972.972 0 101.374 1.374l6.6-6.6 6.6 6.6a.972.972 0 101.374-1.374l-6.6-6.6 6.6-6.6a.972.972 0 00-.7-1.673z"
        transform="translate(-6.981 -6.97)"
      />
    </SvgIcon>
  );
}
export function MenuIcon(props) {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 28,
    height: 28,

    ...rootStyle,
  };
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 92 92"
      sx={rootSx}
      {...rest}
    >
      <path d="M78 23.5H14c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5h64c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5zM84.5 46c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5zm0 29c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5z" />
    </SvgIcon>
  );
}

export function PersonToPersonIcon(props) {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 22,
    height: 22,
    color: "#fff",

    ...rootStyle,
  };
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 128 128"
      sx={rootSx}
      {...rest}
    >
      <circle
        cx={28.2}
        cy={47.4}
        r={7.8}
        transform="rotate(-14.999 28.175 47.43)"
      />
      <path d="M37.4 97.5H27c-4.3-.4-8-3.5-9.1-7.8l-6.5-24.2c-.4-1.4-1.8-2.1-3-1.8-1.4.4-2.1 1.8-1.8 3L13 90.9c1.7 6.3 7 10.9 13.5 11.4.6.1 1.3.1 1.3.1h9.5c1.4 0 2.4-1.1 2.5-2.5 0-1.4-1-2.4-2.4-2.4z" />
      <path d="M48.6 83.9h-13c-.3-4.9-1.1-9.8-2.3-14.7-.1-.4-.4-1.4-.4-1.5-1.7-6.3-7.7-10.3-14-9.7 0 0-.8.1-1 .1-2.3.6-3.7 3-3.1 5.4l6.7 24.9c.7 2.8 3.1 4.9 6.1 5.1h16.1v17.8c0 2.7 2.1 4.9 4.9 4.9 2.7 0 4.9-2.1 4.9-4.9V88.8c0-1.3-.5-2.5-1.5-3.4-.9-1-2.2-1.5-3.4-1.5z" />
      <circle
        cx={101.4}
        cy={47.4}
        r={7.8}
        transform="rotate(-75.001 101.436 47.43)"
      />
      <path d="M90.2 97.5h10.4c4.3-.4 8-3.5 9.1-7.8l6.5-24.2c.4-1.4 1.8-2.1 3-1.8 1.4.4 2.1 1.8 1.8 3l-6.4 24.2c-1.7 6.3-7 10.9-13.5 11.4-.6.1-1.3.1-1.3.1h-9.5c-1.4 0-2.4-1.1-2.5-2.5 0-1.4 1.1-2.4 2.4-2.4z" />
      <path d="M79 83.9h13c.3-4.9 1.1-9.8 2.3-14.7.1-.4.4-1.4.4-1.5 1.7-6.3 7.7-10.3 14-9.7 0 0 .8.1 1 .1 2.3.6 3.7 3 3.1 5.4L106 88.4c-.7 2.8-3.1 4.9-6.1 5.1h-16v17.8c0 2.7-2.1 4.9-4.9 4.9s-4.9-2.1-4.9-4.9V88.8c0-1.3.5-2.5 1.5-3.4.9-1 2.2-1.5 3.4-1.5z" />
      <path d="M38.8 70.8h50.6v6H38.8z" />
    </SvgIcon>
  );
}
export function NotificationIcon(props) {
  const { rootStyle, ...rest } = props;

  const rootSx = {
    height: 24,
    width: 24,
    color: "#000",
    strokeWidth: 0.2,
    ...rootStyle,
  };
  return (
    <SvgIcon
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      sx={rootSx}
      {...rest}
    >
      <path d="M 23.277344 4.0175781 C 15.193866 4.3983176 9 11.343391 9 19.380859 L 9 26.648438 L 6.3496094 31.980469 A 1.50015 1.50015 0 0 0 6.3359375 32.009766 C 5.2696804 34.277268 6.9957076 37 9.5019531 37 L 18 37 C 18 40.295865 20.704135 43 24 43 C 27.295865 43 30 40.295865 30 37 L 38.496094 37 C 41.002339 37 42.730582 34.277829 41.664062 32.009766 A 1.50015 1.50015 0 0 0 41.650391 31.980469 L 39 26.648438 L 39 19 C 39 10.493798 31.863289 3.6133643 23.277344 4.0175781 z M 23.417969 7.0136719 C 30.338024 6.6878857 36 12.162202 36 19 L 36 27 A 1.50015 1.50015 0 0 0 36.15625 27.667969 L 38.949219 33.289062 C 39.128826 33.674017 38.921017 34 38.496094 34 L 9.5019531 34 C 9.077027 34 8.8709034 33.674574 9.0507812 33.289062 C 9.0507812 33.289062 9.0507812 33.287109 9.0507812 33.287109 L 11.84375 27.667969 A 1.50015 1.50015 0 0 0 12 27 L 12 19.380859 C 12 12.880328 16.979446 7.3169324 23.417969 7.0136719 z M 21 37 L 27 37 C 27 38.674135 25.674135 40 24 40 C 22.325865 40 21 38.674135 21 37 z" />
    </SvgIcon>
  );
}

export function SearchIcon(props) {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 16,
    height: 16,
    color: "text.hint",
    ...rootStyle,
  };
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      sx={rootSx}
      {...rest}
    >
      <path
        d="M12.444 6a6.444 6.444 0 103.876 11.578l4.162 4.161a.889.889 0 101.257-1.257l-4.161-4.162A6.43 6.43 0 0012.444 6zm0 1.778a4.668 4.668 0 013.4 7.865.889.889 0 00-.2.2 4.667 4.667 0 11-3.2-8.064z"
        transform="translate(-6 -6)"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
