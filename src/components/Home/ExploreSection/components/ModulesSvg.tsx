import React from 'react'
import { useColorMode } from '@docusaurus/theme-common';

const ModulesSvg = () => {
  const { colorMode } = useColorMode();

  return (
    <div>
      {colorMode === 'light' ? (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32.6249 19.9219L25.5936 15.8594C25.4117 15.7596 25.2074 15.7072 24.9999 15.7072C24.7923 15.7072 24.5881 15.7596 24.4061 15.8594L17.3749 19.9219C17.1991 20.027 17.0535 20.1757 16.9522 20.3537C16.8509 20.5316 16.7974 20.7328 16.7968 20.9375V29.0625C16.7974 29.2673 16.8509 29.4684 16.9522 29.6464C17.0535 29.8243 17.1991 29.9731 17.3749 30.0782L24.4061 34.1407C24.5872 34.2434 24.7917 34.2974 24.9999 34.2974C25.208 34.2974 25.4126 34.2434 25.5936 34.1407L32.6249 30.0782C32.8006 29.9731 32.9462 29.8243 33.0475 29.6464C33.1488 29.4684 33.2024 29.2673 33.203 29.0625V20.9375C33.2024 20.7328 33.1488 20.5316 33.0475 20.3537C32.9462 20.1757 32.8006 20.027 32.6249 19.9219ZM24.9999 18.2344L29.6874 20.9375L24.9999 23.6407L20.3124 20.9375L24.9999 18.2344ZM19.1405 22.9219L23.828 25.625V31.0938L19.1405 28.3907V22.9219ZM26.1718 31.0469V25.6719L30.8593 22.9688V28.3907L26.1718 31.0469ZM46.4843 24.9532C46.4663 24.1691 46.1877 23.4133 45.6926 22.805C45.1975 22.1967 44.514 21.7706 43.7499 21.5938C43.2614 18.9024 42.1953 16.349 40.6249 14.1094C40.96 13.5641 41.1384 12.937 41.1405 12.2969C41.1436 11.8349 41.0539 11.3769 40.8767 10.9502C40.6996 10.5234 40.4386 10.1366 40.1093 9.81253C39.5461 9.31406 38.8414 9.00395 38.0934 8.92551C37.3454 8.84708 36.5917 9.00423 35.9374 9.37503C33.6885 7.80049 31.124 6.73416 28.4218 6.25003C28.229 5.49716 27.7911 4.82987 27.1772 4.35334C26.5633 3.87682 25.8083 3.61816 25.0311 3.61816C24.254 3.61816 23.4989 3.87682 22.885 4.35334C22.2711 4.82987 21.8333 5.49716 21.6405 6.25003C18.917 6.7274 16.3307 7.79393 14.0624 9.37503C13.389 8.98628 12.6078 8.82639 11.8358 8.91936C11.0639 9.01233 10.3429 9.35314 9.78113 9.89065C9.45177 10.2147 9.19079 10.6016 9.01365 11.0283C8.83652 11.455 8.74682 11.913 8.74988 12.375C8.80686 12.9825 9.02238 13.5645 9.37488 14.0625C7.8045 16.3021 6.73834 18.8556 6.24988 21.5469C5.48995 21.7341 4.81468 22.1705 4.33195 22.7866C3.84923 23.4026 3.58691 24.1627 3.58691 24.9453C3.58691 25.728 3.84923 26.488 4.33195 27.1041C4.81468 27.7201 5.48995 28.1566 6.24988 28.3438C6.72312 31.0733 7.7899 33.6656 9.37488 35.9375C9.0398 36.4829 8.8614 37.11 8.85926 37.75C8.85926 38.6824 9.22965 39.5766 9.88896 40.236C10.5483 40.8953 11.4425 41.2657 12.3749 41.2657C12.9762 41.2252 13.5571 41.0316 14.0624 40.7032C16.3039 42.2805 18.864 43.3472 21.5624 43.8282C21.7496 44.5881 22.186 45.2634 22.8021 45.7461C23.4181 46.2288 24.1782 46.4911 24.9608 46.4911C25.7435 46.4911 26.5035 46.2288 27.1196 45.7461C27.7356 45.2634 28.1721 44.5881 28.3593 43.8282C31.0506 43.3397 33.604 42.2735 35.8436 40.7032C36.389 41.0382 37.0161 41.2166 37.6561 41.2188C38.5885 41.2188 39.4827 40.8484 40.1421 40.1891C40.8014 39.5298 41.1718 38.6356 41.1718 37.7032C41.1731 37.0837 41.0114 36.4748 40.703 35.9375C42.2803 33.696 43.347 31.1359 43.828 28.4375C44.5932 28.2475 45.2719 27.8047 45.754 27.1808C46.2361 26.5569 46.4934 25.7884 46.4843 25V24.9532ZM35.2186 35.1719C34.562 35.8325 34.1916 36.7249 34.1874 37.6563C34.189 38.062 34.2631 38.4641 34.4061 38.8438C32.5214 40.1253 30.3945 41.008 28.1561 41.4375C27.8792 40.8286 27.4329 40.3122 26.8705 39.9501C26.308 39.588 25.6532 39.3954 24.9843 39.3954C24.3153 39.3954 23.6605 39.588 23.0981 39.9501C22.5356 40.3122 22.0893 40.8286 21.8124 41.4375C19.571 41.0093 17.4429 40.1208 15.5624 38.8282C15.7069 38.4544 15.7811 38.057 15.7811 37.6563C15.7769 36.7249 15.4065 35.8325 14.7499 35.1719C14.2744 34.7233 13.6861 34.4122 13.0477 34.2718C12.4092 34.1315 11.7446 34.1671 11.1249 34.375C9.84318 32.4886 8.95565 30.3628 8.51551 28.125C9.1149 27.8416 9.62146 27.3937 9.9762 26.8336C10.3309 26.2734 10.5193 25.624 10.5193 24.961C10.5193 24.2979 10.3309 23.6485 9.9762 23.0884C9.62146 22.5282 9.1149 22.0803 8.51551 21.7969C8.93815 19.5565 9.82137 17.4282 11.1093 15.5469C11.6393 15.7381 12.2077 15.7985 12.7662 15.7229C13.3246 15.6474 13.8565 15.4381 14.3167 15.1129C14.7769 14.7877 15.1518 14.3561 15.4095 13.855C15.6671 13.3539 15.8 12.7979 15.7968 12.2344C15.7973 11.8682 15.7392 11.5042 15.6249 11.1563C17.5054 9.86366 19.6335 8.97516 21.8749 8.5469C22.1537 9.15145 22.5999 9.66347 23.1606 10.0224C23.7214 10.3812 24.3732 10.572 25.0389 10.572C25.7047 10.572 26.3565 10.3812 26.9173 10.0224C27.478 9.66347 27.9242 9.15145 28.203 8.5469C30.4414 8.97643 32.5682 9.85909 34.453 11.1407C34.31 11.5203 34.2359 11.9225 34.2343 12.3282C34.2343 13.2606 34.6047 14.1548 35.264 14.8141C35.9233 15.4734 36.8175 15.8438 37.7499 15.8438C38.1505 15.8423 38.5476 15.7682 38.9218 15.625C40.212 17.5068 41.1003 19.6345 41.5311 21.875C40.9479 22.1627 40.4568 22.6078 40.1134 23.1601C39.7699 23.7123 39.5879 24.3497 39.5879 25C39.5879 25.6504 39.7699 26.2877 40.1134 26.84C40.4568 27.3922 40.9479 27.8374 41.5311 28.125C41.099 30.3652 40.2108 32.4926 38.9218 34.375C38.2871 34.1576 37.6044 34.1214 36.9502 34.2704C36.2961 34.4195 35.6965 34.7479 35.2186 35.2188V35.1719ZM43.0311 26.125C42.7994 26.125 42.5728 26.0563 42.3801 25.9275C42.1874 25.7988 42.0372 25.6157 41.9485 25.4016C41.8598 25.1875 41.8366 24.9519 41.8818 24.7245C41.927 24.4972 42.0386 24.2884 42.2025 24.1245C42.3664 23.9606 42.5752 23.849 42.8025 23.8038C43.0298 23.7586 43.2655 23.7818 43.4796 23.8705C43.6937 23.9592 43.8767 24.1094 44.0055 24.3021C44.1343 24.4948 44.203 24.7214 44.203 24.9532C44.2074 25.1157 44.1784 25.2775 44.1177 25.4284C44.057 25.5793 43.966 25.7161 43.8503 25.8304C43.7345 25.9446 43.5966 26.0339 43.4449 26.0927C43.2933 26.1514 43.1311 26.1784 42.9686 26.1719L43.0311 26.125ZM37.703 11.125C37.9346 11.1252 38.161 11.1941 38.3535 11.3229C38.5461 11.4516 38.6961 11.6346 38.7847 11.8486C38.8733 12.0626 38.8965 12.2981 38.8514 12.5252C38.8063 12.7524 38.6948 12.9611 38.5311 13.125C38.3076 13.3371 38.0112 13.4554 37.703 13.4554C37.3948 13.4554 37.0984 13.3371 36.8749 13.125C36.7112 12.9611 36.5998 12.7524 36.5546 12.5252C36.5095 12.2981 36.5327 12.0626 36.6213 11.8486C36.7099 11.6346 36.86 11.4516 37.0525 11.3229C37.245 11.1941 37.4714 11.1252 37.703 11.125ZM24.9999 5.8594C25.2317 5.8594 25.4582 5.92813 25.6509 6.0569C25.8437 6.18567 25.9939 6.36869 26.0826 6.58282C26.1712 6.79695 26.1945 7.03258 26.1492 7.2599C26.104 7.48722 25.9924 7.69603 25.8285 7.85992C25.6646 8.02381 25.4558 8.13542 25.2285 8.18063C25.0012 8.22585 24.7656 8.20264 24.5514 8.11395C24.3373 8.02525 24.1543 7.87505 24.0255 7.68234C23.8967 7.48962 23.828 7.26305 23.828 7.03128C23.8321 6.72173 23.9568 6.42601 24.1757 6.20711C24.3946 5.98821 24.6903 5.86345 24.9999 5.8594ZM11.4686 11.4688C11.6884 11.2493 11.9862 11.1261 12.2968 11.1261C12.6073 11.1261 12.9052 11.2493 13.1249 11.4688C13.3443 11.6885 13.4676 11.9864 13.4676 12.2969C13.4676 12.6074 13.3443 12.9053 13.1249 13.125C12.9013 13.3371 12.6049 13.4554 12.2968 13.4554C11.9886 13.4554 11.6922 13.3371 11.4686 13.125C11.2492 12.9053 11.1259 12.6074 11.1259 12.2969C11.1259 11.9864 11.2492 11.6885 11.4686 11.4688ZM7.03113 23.8282C7.26291 23.8282 7.48948 23.8969 7.68219 24.0256C7.8749 24.1544 8.02511 24.3374 8.1138 24.5516C8.2025 24.7657 8.22571 25.0013 8.18049 25.2286C8.13527 25.456 8.02366 25.6648 7.85977 25.8287C7.69588 25.9926 7.48708 26.1042 7.25975 26.1494C7.03243 26.1946 6.79681 26.1714 6.58267 26.0827C6.36854 25.994 6.18552 25.8438 6.05675 25.6511C5.92799 25.4584 5.85926 25.2318 5.85926 25C5.8633 24.6905 5.98807 24.3948 6.20697 24.1759C6.42586 23.957 6.72159 23.8322 7.03113 23.8282ZM11.4686 38.5313C11.2492 38.3116 11.1259 38.0137 11.1259 37.7032C11.1259 37.3926 11.2492 37.0948 11.4686 36.875C11.6325 36.711 11.8413 36.5992 12.0686 36.5539C12.296 36.5086 12.5317 36.5317 12.7459 36.6203C12.9601 36.709 13.1432 36.8592 13.2721 37.0519C13.4009 37.2447 13.4697 37.4713 13.4697 37.7032C13.4697 37.935 13.4009 38.1616 13.2721 38.3544C13.1432 38.5471 12.9601 38.6973 12.7459 38.786C12.5317 38.8746 12.296 38.8977 12.0686 38.8524C11.8413 38.8071 11.6325 38.6953 11.4686 38.5313ZM24.9999 44.1407C24.7681 44.1407 24.5415 44.0719 24.3488 43.9432C24.1561 43.8144 24.0059 43.6314 23.9172 43.4172C23.8285 43.2031 23.8053 42.9675 23.8505 42.7402C23.8957 42.5128 24.0074 42.304 24.1712 42.1401C24.3351 41.9762 24.5439 41.8646 24.7713 41.8194C24.9986 41.7742 25.2342 41.7974 25.4483 41.8861C25.6625 41.9748 25.8455 42.125 25.9743 42.3177C26.103 42.5104 26.1718 42.737 26.1718 42.9688C26.1677 43.2783 26.0429 43.574 25.824 43.7929C25.6052 44.0118 25.3094 44.1366 24.9999 44.1407ZM38.5311 38.5313C38.3114 38.7507 38.0136 38.874 37.703 38.874C37.3925 38.874 37.0946 38.7507 36.8749 38.5313C36.7108 38.3674 36.5991 38.1586 36.5538 37.9313C36.5084 37.7039 36.5315 37.4682 36.6202 37.254C36.7089 37.0398 36.8591 36.8567 37.0518 36.7278C37.2445 36.599 37.4712 36.5302 37.703 36.5302C37.9348 36.5302 38.1615 36.599 38.3542 36.7278C38.547 36.8567 38.6972 37.0398 38.7858 37.254C38.8745 37.4682 38.8976 37.7039 38.8523 37.9313C38.8069 38.1586 38.6952 38.3674 38.5311 38.5313Z" fill="url(#paint0_linear_30273_2221)" />
          <defs>
            <linearGradient id="paint0_linear_30273_2221" x1="-2.34387" y1="-2.34372" x2="47.2343" y2="47.2344" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9CECFB" />
              <stop offset="0.51" stopColor="#65C7F7" />
              <stop offset="1" stopColor="#0052D4" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.8">
            <path d="M32.6249 19.9219L25.5936 15.8594C25.4117 15.7596 25.2074 15.7072 24.9999 15.7072C24.7923 15.7072 24.5881 15.7596 24.4061 15.8594L17.3749 19.9219C17.1991 20.027 17.0535 20.1757 16.9522 20.3537C16.8509 20.5316 16.7974 20.7328 16.7968 20.9375V29.0625C16.7974 29.2673 16.8509 29.4684 16.9522 29.6464C17.0535 29.8243 17.1991 29.9731 17.3749 30.0782L24.4061 34.1407C24.5872 34.2434 24.7917 34.2974 24.9999 34.2974C25.208 34.2974 25.4126 34.2434 25.5936 34.1407L32.6249 30.0782C32.8006 29.9731 32.9462 29.8243 33.0475 29.6464C33.1488 29.4684 33.2024 29.2673 33.203 29.0625V20.9375C33.2024 20.7328 33.1488 20.5316 33.0475 20.3537C32.9462 20.1757 32.8006 20.027 32.6249 19.9219ZM24.9999 18.2344L29.6874 20.9375L24.9999 23.6407L20.3124 20.9375L24.9999 18.2344ZM19.1405 22.9219L23.828 25.625V31.0938L19.1405 28.3907V22.9219ZM26.1718 31.0469V25.6719L30.8593 22.9688V28.3907L26.1718 31.0469ZM46.4843 24.9532C46.4663 24.1691 46.1877 23.4133 45.6926 22.805C45.1975 22.1967 44.514 21.7706 43.7499 21.5938C43.2614 18.9024 42.1953 16.349 40.6249 14.1094C40.96 13.5641 41.1384 12.937 41.1405 12.2969C41.1436 11.8349 41.0539 11.3769 40.8767 10.9502C40.6996 10.5234 40.4386 10.1366 40.1093 9.81253C39.5461 9.31406 38.8414 9.00395 38.0934 8.92551C37.3454 8.84708 36.5917 9.00423 35.9374 9.37503C33.6885 7.80049 31.124 6.73416 28.4218 6.25003C28.229 5.49716 27.7911 4.82987 27.1772 4.35334C26.5633 3.87682 25.8083 3.61816 25.0311 3.61816C24.254 3.61816 23.4989 3.87682 22.885 4.35334C22.2711 4.82987 21.8333 5.49716 21.6405 6.25003C18.917 6.7274 16.3307 7.79393 14.0624 9.37503C13.389 8.98628 12.6078 8.82639 11.8358 8.91936C11.0639 9.01233 10.3429 9.35314 9.78113 9.89065C9.45177 10.2147 9.19079 10.6016 9.01365 11.0283C8.83652 11.455 8.74682 11.913 8.74988 12.375C8.80686 12.9825 9.02238 13.5645 9.37488 14.0625C7.8045 16.3021 6.73834 18.8556 6.24988 21.5469C5.48995 21.7341 4.81468 22.1705 4.33195 22.7866C3.84923 23.4026 3.58691 24.1627 3.58691 24.9453C3.58691 25.728 3.84923 26.488 4.33195 27.1041C4.81468 27.7201 5.48995 28.1566 6.24988 28.3438C6.72312 31.0733 7.7899 33.6656 9.37488 35.9375C9.0398 36.4829 8.8614 37.11 8.85926 37.75C8.85926 38.6824 9.22965 39.5766 9.88896 40.236C10.5483 40.8953 11.4425 41.2657 12.3749 41.2657C12.9762 41.2252 13.5571 41.0316 14.0624 40.7032C16.3039 42.2805 18.864 43.3472 21.5624 43.8282C21.7496 44.5881 22.186 45.2634 22.8021 45.7461C23.4181 46.2288 24.1782 46.4911 24.9608 46.4911C25.7435 46.4911 26.5035 46.2288 27.1196 45.7461C27.7356 45.2634 28.1721 44.5881 28.3593 43.8282C31.0506 43.3397 33.604 42.2735 35.8436 40.7032C36.389 41.0382 37.0161 41.2166 37.6561 41.2188C38.5885 41.2188 39.4827 40.8484 40.1421 40.1891C40.8014 39.5298 41.1718 38.6356 41.1718 37.7032C41.1731 37.0837 41.0114 36.4748 40.703 35.9375C42.2803 33.696 43.347 31.1359 43.828 28.4375C44.5932 28.2475 45.2719 27.8047 45.754 27.1808C46.2361 26.5569 46.4934 25.7884 46.4843 25V24.9532ZM35.2186 35.1719C34.562 35.8325 34.1916 36.7249 34.1874 37.6563C34.189 38.062 34.2631 38.4641 34.4061 38.8438C32.5214 40.1253 30.3945 41.008 28.1561 41.4375C27.8792 40.8286 27.4329 40.3122 26.8705 39.9501C26.308 39.588 25.6532 39.3954 24.9843 39.3954C24.3153 39.3954 23.6605 39.588 23.0981 39.9501C22.5356 40.3122 22.0893 40.8286 21.8124 41.4375C19.571 41.0093 17.4429 40.1208 15.5624 38.8282C15.7069 38.4544 15.7811 38.057 15.7811 37.6563C15.7769 36.7249 15.4065 35.8325 14.7499 35.1719C14.2744 34.7233 13.6861 34.4122 13.0477 34.2718C12.4092 34.1315 11.7446 34.1671 11.1249 34.375C9.84318 32.4886 8.95565 30.3628 8.51551 28.125C9.1149 27.8416 9.62146 27.3937 9.9762 26.8336C10.3309 26.2734 10.5193 25.624 10.5193 24.961C10.5193 24.2979 10.3309 23.6485 9.9762 23.0884C9.62146 22.5282 9.1149 22.0803 8.51551 21.7969C8.93815 19.5565 9.82137 17.4282 11.1093 15.5469C11.6393 15.7381 12.2077 15.7985 12.7662 15.7229C13.3246 15.6474 13.8565 15.4381 14.3167 15.1129C14.7769 14.7877 15.1518 14.3561 15.4095 13.855C15.6671 13.3539 15.8 12.7979 15.7968 12.2344C15.7973 11.8682 15.7392 11.5042 15.6249 11.1563C17.5054 9.86366 19.6335 8.97516 21.8749 8.5469C22.1537 9.15145 22.5999 9.66347 23.1606 10.0224C23.7214 10.3812 24.3732 10.572 25.0389 10.572C25.7047 10.572 26.3565 10.3812 26.9173 10.0224C27.478 9.66347 27.9242 9.15145 28.203 8.5469C30.4414 8.97643 32.5682 9.85909 34.453 11.1407C34.31 11.5203 34.2359 11.9225 34.2343 12.3282C34.2343 13.2606 34.6047 14.1548 35.264 14.8141C35.9233 15.4734 36.8175 15.8438 37.7499 15.8438C38.1505 15.8423 38.5476 15.7682 38.9218 15.625C40.212 17.5068 41.1003 19.6345 41.5311 21.875C40.9479 22.1627 40.4568 22.6078 40.1134 23.1601C39.7699 23.7123 39.5879 24.3497 39.5879 25C39.5879 25.6504 39.7699 26.2877 40.1134 26.84C40.4568 27.3922 40.9479 27.8374 41.5311 28.125C41.099 30.3652 40.2108 32.4926 38.9218 34.375C38.2871 34.1576 37.6044 34.1214 36.9502 34.2704C36.2961 34.4195 35.6965 34.7479 35.2186 35.2188V35.1719ZM43.0311 26.125C42.7994 26.125 42.5728 26.0563 42.3801 25.9275C42.1874 25.7988 42.0372 25.6157 41.9485 25.4016C41.8598 25.1875 41.8366 24.9519 41.8818 24.7245C41.927 24.4972 42.0386 24.2884 42.2025 24.1245C42.3664 23.9606 42.5752 23.849 42.8025 23.8038C43.0298 23.7586 43.2655 23.7818 43.4796 23.8705C43.6937 23.9592 43.8767 24.1094 44.0055 24.3021C44.1343 24.4948 44.203 24.7214 44.203 24.9532C44.2074 25.1157 44.1784 25.2775 44.1177 25.4284C44.057 25.5793 43.966 25.7161 43.8503 25.8304C43.7345 25.9446 43.5966 26.0339 43.4449 26.0927C43.2933 26.1514 43.1311 26.1784 42.9686 26.1719L43.0311 26.125ZM37.703 11.125C37.9346 11.1252 38.161 11.1941 38.3535 11.3229C38.5461 11.4516 38.6961 11.6346 38.7847 11.8486C38.8733 12.0626 38.8965 12.2981 38.8514 12.5252C38.8063 12.7524 38.6948 12.9611 38.5311 13.125C38.3076 13.3371 38.0112 13.4554 37.703 13.4554C37.3948 13.4554 37.0984 13.3371 36.8749 13.125C36.7112 12.9611 36.5998 12.7524 36.5546 12.5252C36.5095 12.2981 36.5327 12.0626 36.6213 11.8486C36.7099 11.6346 36.86 11.4516 37.0525 11.3229C37.245 11.1941 37.4714 11.1252 37.703 11.125ZM24.9999 5.8594C25.2317 5.8594 25.4582 5.92813 25.6509 6.0569C25.8437 6.18567 25.9939 6.36869 26.0826 6.58282C26.1712 6.79695 26.1945 7.03258 26.1492 7.2599C26.104 7.48722 25.9924 7.69603 25.8285 7.85992C25.6646 8.02381 25.4558 8.13542 25.2285 8.18063C25.0012 8.22585 24.7656 8.20264 24.5514 8.11395C24.3373 8.02525 24.1543 7.87505 24.0255 7.68234C23.8967 7.48962 23.828 7.26305 23.828 7.03128C23.8321 6.72173 23.9568 6.42601 24.1757 6.20711C24.3946 5.98821 24.6903 5.86345 24.9999 5.8594ZM11.4686 11.4688C11.6884 11.2493 11.9862 11.1261 12.2968 11.1261C12.6073 11.1261 12.9052 11.2493 13.1249 11.4688C13.3443 11.6885 13.4676 11.9864 13.4676 12.2969C13.4676 12.6074 13.3443 12.9053 13.1249 13.125C12.9013 13.3371 12.6049 13.4554 12.2968 13.4554C11.9886 13.4554 11.6922 13.3371 11.4686 13.125C11.2492 12.9053 11.1259 12.6074 11.1259 12.2969C11.1259 11.9864 11.2492 11.6885 11.4686 11.4688ZM7.03113 23.8282C7.26291 23.8282 7.48948 23.8969 7.68219 24.0256C7.8749 24.1544 8.02511 24.3374 8.1138 24.5516C8.2025 24.7657 8.22571 25.0013 8.18049 25.2286C8.13527 25.456 8.02366 25.6648 7.85977 25.8287C7.69588 25.9926 7.48708 26.1042 7.25975 26.1494C7.03243 26.1946 6.79681 26.1714 6.58267 26.0827C6.36854 25.994 6.18552 25.8438 6.05675 25.6511C5.92799 25.4584 5.85926 25.2318 5.85926 25C5.8633 24.6905 5.98807 24.3948 6.20697 24.1759C6.42586 23.957 6.72159 23.8322 7.03113 23.8282ZM11.4686 38.5313C11.2492 38.3116 11.1259 38.0137 11.1259 37.7032C11.1259 37.3926 11.2492 37.0948 11.4686 36.875C11.6325 36.711 11.8413 36.5992 12.0686 36.5539C12.296 36.5086 12.5317 36.5317 12.7459 36.6203C12.9601 36.709 13.1432 36.8592 13.2721 37.0519C13.4009 37.2447 13.4697 37.4713 13.4697 37.7032C13.4697 37.935 13.4009 38.1616 13.2721 38.3544C13.1432 38.5471 12.9601 38.6973 12.7459 38.786C12.5317 38.8746 12.296 38.8977 12.0686 38.8524C11.8413 38.8071 11.6325 38.6953 11.4686 38.5313ZM24.9999 44.1407C24.7681 44.1407 24.5415 44.0719 24.3488 43.9432C24.1561 43.8144 24.0059 43.6314 23.9172 43.4172C23.8285 43.2031 23.8053 42.9675 23.8505 42.7402C23.8957 42.5128 24.0074 42.304 24.1712 42.1401C24.3351 41.9762 24.5439 41.8646 24.7713 41.8194C24.9986 41.7742 25.2342 41.7974 25.4483 41.8861C25.6625 41.9748 25.8455 42.125 25.9743 42.3177C26.103 42.5104 26.1718 42.737 26.1718 42.9688C26.1677 43.2783 26.0429 43.574 25.824 43.7929C25.6052 44.0118 25.3094 44.1366 24.9999 44.1407ZM38.5311 38.5313C38.3114 38.7507 38.0136 38.874 37.703 38.874C37.3925 38.874 37.0946 38.7507 36.8749 38.5313C36.7108 38.3674 36.5991 38.1586 36.5538 37.9313C36.5084 37.7039 36.5315 37.4682 36.6202 37.254C36.7089 37.0398 36.8591 36.8567 37.0518 36.7278C37.2445 36.599 37.4712 36.5302 37.703 36.5302C37.9348 36.5302 38.1615 36.599 38.3542 36.7278C38.547 36.8567 38.6972 37.0398 38.7858 37.254C38.8745 37.4682 38.8976 37.7039 38.8523 37.9313C38.8069 38.1586 38.6952 38.3674 38.5311 38.5313Z" fill="url(#paint0_linear_30273_2748)" />
          </g>
          <defs>
            <linearGradient id="paint0_linear_30273_2748" x1="-2.34387" y1="-2.34372" x2="47.2343" y2="47.2344" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9CECFB" />
              <stop offset="0.51" stopColor="#65C7F7" />
              <stop offset="1" stopColor="#0052D4" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  )
}

export default ModulesSvg
