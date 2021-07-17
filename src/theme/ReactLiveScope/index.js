/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import "tailwindcss/dist/tailwind.css"
import "breeze-ui/build/index.css"
import * as BreezeUI from 'breeze-ui'
import * as HeroIcons from '@heroicons/react/outline'

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ...BreezeUI,
  ...HeroIcons
};

export default ReactLiveScope;
