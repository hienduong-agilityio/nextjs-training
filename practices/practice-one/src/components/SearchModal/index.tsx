'use client';

// Libraries
import { useState, useRef, useEffect } from 'react';

// Components
import { Button, SearchBox } from '@/components';

// Icons
import { SearchIcon } from '@/icons';

// Hooks
import { useClickOutside } from '@/hooks';

// TODO: SearchModal should be a layout
const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  useClickOutside(modalRef, handleCloseModal, isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <div>
      <Button
        onClick={handleOpenModal}
        className="block lg:hidden cursor-pointer"
      >
        <SearchIcon size={24} />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 lg:hidden">
          <div
            ref={modalRef}
            className="absolute top-10 left-0 right-0 bg-white rounded-lg border-2 shadow-lg border-primary-50 w-full max-w-lg mx-auto"
          >
            <SearchBox
              customClass={{
                container: 'flex flex-col items-center w-full',
                input: 'w-full lg:mb-4',
                button: 'w-full',
              }}
              buttonText="Search"
              onCloseModal={handleCloseModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchModal;
