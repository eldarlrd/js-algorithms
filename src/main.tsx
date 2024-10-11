/**
 * @license AGPL-3.0-only
 * JS Algorithms - Interactive JavaScript Algorithms
 * Copyright (C) 2022-2024 Eldar Pashazade <eldarlrd@pm.me>
 *
 * This file is part of JS Algorithms.
 *
 * JS Algorithms is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, version 3.
 *
 * JS Algorithms is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with JS Algorithms. If not, see <https://www.gnu.org/licenses/>.
 */

import { render } from 'preact';

import { App } from '@/App.tsx';

const root = document.getElementById('root');
if (root) render(<App />, root);
