'use client';
import { Group, Burger, TextInput, ActionIcon, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FaUser } from '@react-icons/all-files/fa/FaUser';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';
import { FaShoppingCart } from '@react-icons/all-files/fa/FaShoppingCart';
import classes from './header.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/product', label: 'Product' },
  { link: '/testimonial', label: 'Testimonial' },
  { link: '/contact', label: 'Contact' },
];

export function HeaderSearch() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size='sm' hiddenFrom='md' />
          <span className={classes.logo}>AR SHOP</span>
        </Group>

        <Group ml={50} gap={5} className={classes.links} visibleFrom='md'>
          {items}
        </Group>

        <Group>
          <TextInput
            className={classes.search}
            placeholder='Search products'
            rightSection={
              <ActionIcon size={32} radius='xl' color={'teal'} variant='filled'>
                <FaSearch size='1.1rem' stroke={1.5} />
              </ActionIcon>
            }
          />
          <ActionIcon variant='subtle' color='gray' size='lg'>
            <FaShoppingCart size='1.1rem' stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant='subtle' color='gray' size='lg'>
            <FaUser size='1.1rem' stroke={1.5} />
          </ActionIcon>
          <Burger
            opened={opened}
            onClick={toggle}
            size='sm'
            className={classes.burgerMenu}
            hiddenFrom='md'
          />
        </Group>
      </div>
    </header>
  );
}
