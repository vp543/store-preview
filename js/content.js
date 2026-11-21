// ALL editable content lives here: contact, prices, sample posts per store type.
// {store}, {town} and {townTag} are filled in from the personalized link.
(function (root) {
  const CONTENT = {
    contact: {
      phone: '+19738857373',
      phoneDisplay: '(973) 885-7373',
      email: 'keyurbhavsar59@gmail.com',
      area: 'North NJ',
    },

    packages: [
      { id: 'starter', name: 'Starter', price: '$399', per: '/month', tagline: 'Get found & look active.',
        items: ['Facebook + Instagram setup', '8 posts per month', 'Google profile updates', 'Monthly check-in call'] },
      { id: 'growth', name: 'Growth', price: '$699', per: '/month', badge: 'Most popular', tagline: 'Build a loyal local following.',
        items: ['12 posts + 4 Reels', 'Comment replies', 'Holiday & sale promos', 'Monthly results report'] },
      { id: 'adspro', name: 'Ads Pro', price: '$999', per: '/month', tagline: 'Reach new people nearby.',
        items: ['Everything in Growth', 'Facebook & Instagram ads', 'Ads 5–10 miles around your store', 'Ad results report'],
        fine: 'Ad budget paid separately to Meta.' },
      { id: 'seo', name: 'Local SEO add-on', price: '$500', per: '/month', note: '+ $399 setup', tagline: 'Rank higher on Google Maps & “near me”.',
        items: ['Google Business Profile', 'Reviews', 'Listings', 'Monthly ranking report'] },
      { id: 'audit', name: 'One-time SEO audit', price: '$299', per: 'one time', tagline: 'Not ready for monthly? Start here.',
        items: ['Google profile check', 'Reviews & listings check', 'You vs. your top 3 competitors', '3–5 page report with fixes'] },
      { id: 'allinone', name: 'All-in-One Deal', price: '$1,399', per: '/month', badge: 'Best value', note: 'FREE setup',
        tagline: 'Ads Pro + Local SEO together.',
        items: ['Everything in Ads Pro', 'Plus Local SEO', 'Saves $100 every month', 'Plus the $399 setup, free'] },
    ],

    steps: [
      ['Free 15-minute review', 'I look at your Facebook, Instagram and Google pages with you, no charge.'],
      ['Pick the package that fits', 'Month to month. No long contracts.'],
      ['I post, you get more customers', 'You run the store. I handle the posting, replies and reports.'],
    ],

    // The ONLY real numbers in the app — from an actual Instagram review, Nov 2026.
    proof: {
      source: 'From a real Morris County pet store’s Instagram, reviewed Nov 2026.',
      template: { label: 'Template graphics', low: 53, high: 86 },
      real: { label: 'Real dogs, real store', low: 252, high: 587 },
    },

    types: {
      groomer: {
        label: 'Pet grooming',
        category: 'Dog groomer · Pet supply store',
        recommend: 'growth',
        realWord: 'real dogs groomed in your shop',
        heroLine: 'Fresh, fluffy, and finally famous.',
        services: ['Bath & blow-dry', 'Haircut & styling', 'Nail trim', 'Teeth & ears'],
        searches: ['dog groomer near me', 'dog grooming {town}', 'pet groomer open Saturday'],
        ad: { headline: 'Spa day for your pup in {town} 🛁', body: 'Book a bath & trim at {store} this week. 5–10 miles from your door.', cta: 'Book now', offer: 'Sample offer — you choose the real one.' },
        reel: ['Is your pup looking a little RUFF?', 'Before → After', 'Bath · Trim · Nails · Style', 'Book this week', '{store} · {town}'],
        posts: [
          { title: 'Before & After', art: 'beforeafter', caption: 'Came in scruffy, left like a movie star ✨ Another glow-up at {store}. Tag a pup who needs one! {townTag} #DogGrooming #BeforeAndAfter', why: 'Transformation videos are the #1 thing pet owners share. Filmed in your shop, takes 30 seconds.' },
          { title: 'Pup of the Week', art: 'star', caption: 'Meet this week’s Pup of the Week! 🏆 Fresh cut, big personality. Thanks for trusting {store}! {townTag} #PupOfTheWeek', why: 'Owners repost their own dog — free reach to their friends in {town}.' },
          { title: 'Meet the Groomer', art: 'groomer', caption: 'The hands behind the haircuts 💇 Say hi to our groomer — patient, gentle, and not scared of the zoomies. Come see us at {store}. {townTag}', why: 'People book with people. A face builds trust faster than a logo.' },
          { title: 'Bath-time ASMR', art: 'bath', caption: 'Turn the sound on 🛁🫧 Nothing more relaxing than a warm bath and a happy pup. Book a spa day at {store}. {townTag} #DogSpa', why: 'Short, calming bath clips were among the top-viewed Reels in our review.' },
          { title: 'Holiday Bandanas', art: 'bandana', caption: 'Holiday bandanas are BACK 🎄 Every groom this month leaves with one. Book early, spots go fast! {store} · {town} {townTag}', why: 'Seasonal hooks give people a reason to book now instead of “someday”.' },
          { title: 'Grooming Tip', art: 'tip', caption: 'Winter paw tip ❄️ Rinse paws after walks — road salt dries and cracks pads. Need a paw trim? {store} has you covered. {townTag}', why: 'Helpful tips get saved and shared, and they show you know your stuff.' },
          { title: 'Treat Taste Test', art: 'treat', caption: 'Official taste-testers at work 🦴 Which treat won? Watch till the end! Stop by {store} for a sample. {townTag}', why: 'Fun, real moments beat stock photos — and sell what’s on your shelf.' },
          { title: 'Happy Review', art: 'review', caption: 'Thank you for the kind words! ⭐⭐⭐⭐⭐ Every week we share a favorite real review here. Loved your visit to {store}? A Google review helps neighbors find us. {townTag}', why: 'We only ever share real reviews you’ve received. This turns them into social proof people actually see.' },
          { title: 'Open Spots', art: 'calendar', caption: 'Two spots just opened for Saturday 📅 First to message gets them! {store} · {town} {townTag}', why: 'Fills last-minute gaps in your schedule — money you’d otherwise lose.' },
        ],
      },

      liquor: {
        label: 'Liquor store',
        category: 'Liquor store · Wine shop',
        recommend: 'growth',
        realWord: 'your real shelves and staff',
        heroLine: 'The shop your neighbors already love — now online.',
        services: ['Wine', 'Craft beer', 'Spirits', 'Party orders'],
        searches: ['liquor store near me', 'wine shop {town}', 'craft beer {town}'],
        ad: { headline: 'Weekend wine picks in {town}', body: 'New arrivals and staff favorites at {store}. Stop in this weekend.', cta: 'Get directions', offer: 'Shown only to adults 21+ nearby.' },
        reel: ['Not sure what to bring tonight?', 'Staff pick of the week', 'Wine · Craft beer · Spirits', 'New arrivals this weekend', '{store} · {town}'],
        posts: [
          { title: 'Staff Pick', art: 'wine', caption: 'Staff pick of the week 🍷 A smooth red our team keeps coming back to. Ask for it at the counter at {store}. 21+. {townTag} #StaffPick #Wine', why: 'A real person’s recommendation is the reason people choose a local shop over a big chain.' },
          { title: 'New Arrivals', art: 'newarrival', caption: 'Just landed on our shelves 📦 Fresh arrivals this week — come see what’s new at {store}. {townTag} #NewArrivals', why: 'Gives regulars a reason to stop in again this week.' },
          { title: 'Dinner Pairing', art: 'pairing', caption: 'Taco Tuesday pairing 🌮 A crisp white or a cold Mexican lager. Our staff will point you to the right one at {store}. {townTag} #WinePairing', why: 'Pairings answer “what should I buy?” — the question every shopper has.' },
          { title: 'Game-Day Display', art: 'gameday', caption: 'Game-day setup is ready 🏈 Grab your favorites for Sunday on the way home. {store} · {town} {townTag}', why: 'Times your posts to the moments people are already planning to shop.' },
          { title: 'Local Craft Beer', art: 'beer', caption: 'Brewed right here in New Jersey 🍺 Support local — this week’s NJ craft spotlight is in the cooler at {store}. {townTag} #NJCraftBeer', why: 'Local pride posts get shared by the brewery too — double the reach.' },
          { title: 'Tasting Event', art: 'tasting', caption: 'Free in-store tasting this Friday, 5–7 pm 🍷 Small samples for guests 21+ with ID, right here at {store}. Find your new favorite. {townTag}', why: 'NJ lets stores advertise free, in-store tastings for guests 21+. Events bring new faces in.' },
          { title: 'Meet the Team', art: 'staff', caption: 'Say hi to the folks who know every bottle in the store 👋 Need a recommendation? Just ask us at {store}. {townTag}', why: 'Friendly faces make a liquor store feel like a neighborhood shop.' },
          { title: 'Gift Ideas', art: 'gift', caption: 'Hosting gift sorted 🎁 Ask us to wrap a bottle for the holidays — we’ll help you pick. {store} · {town} {townTag}', why: 'Holiday gifting is the busiest season — be the first shop people think of.' },
          { title: 'Happy Review', art: 'review', caption: 'Thank you for the kind words! ⭐⭐⭐⭐⭐ Every week we share a favorite real review here. A Google review helps neighbors find {store}. {townTag}', why: 'We only ever share real reviews you’ve received. This turns them into social proof people actually see.' },
        ],
      },

      store: {
        label: 'Local store',
        category: 'Local shop',
        recommend: 'starter',
        realWord: 'real people and products in your store',
        heroLine: 'More neighbors walking through your door.',
        services: ['Products', 'Services', 'Gifts', 'Events'],
        searches: ['{store}', 'shops near me', 'gift shop {town}'],
        ad: { headline: 'Right around the corner in {town}', body: 'See what’s new at {store} this week. Just a few minutes from you.', cta: 'Get directions', offer: 'Sample ad — shown only to people nearby.' },
        reel: ['Have you been inside yet?', 'Behind the counter', 'New · Local · Friendly', 'Stop by this week', '{store} · {town}'],
        posts: [
          { title: 'New This Week', art: 'bag', caption: 'Fresh on the shelves this week ✨ Come see what’s new at {store}! {townTag} #ShopLocal', why: 'Gives regulars a reason to come back this week, not next month.' },
          { title: 'Behind the Scenes', art: 'behind', caption: 'A peek behind the counter 👀 This is what getting ready for Saturday looks like at {store}. {townTag}', why: 'Real moments in your store beat polished templates every time.' },
          { title: 'Customer Spotlight', art: 'customer', caption: 'Shout-out to one of our favorite regulars! 💛 Thanks for shopping local with {store}. {townTag}', why: 'Customers share posts about themselves — free reach to their friends.' },
          { title: 'Seasonal Sale', art: 'sale', caption: 'Holiday savings start Friday 🎉 Stop by {store} in {town} for this season’s deals. {townTag}', why: 'Seasonal hooks give people a reason to visit now.' },
          { title: 'Meet the Owner', art: 'owner', caption: 'Hi neighbors! 👋 I opened {store} because {town} deserved a shop like this. Come say hi. {townTag}', why: 'People buy from people. Your story is your edge over the big chains.' },
          { title: 'Quick Tip', art: 'tip', caption: 'Quick tip of the week 💡 Ask us anything — we love helping. {store} · {town} {townTag}', why: 'Helpful posts get saved and shared, and show you know your stuff.' },
          { title: 'Happy Review', art: 'review', caption: 'Thank you for the kind words! ⭐⭐⭐⭐⭐ Every week we share a favorite real review here. A Google review helps neighbors find {store}. {townTag}', why: 'We only ever share real reviews you’ve received. This turns them into social proof people actually see.' },
          { title: 'Local Event', art: 'calendar', caption: 'See you this Saturday! 📅 Join us at {store} for a community morning in {town}. {townTag}', why: 'Events bring new faces through the door.' },
          { title: 'Thank You, {town}', art: 'heart', caption: 'Thank you, {town} ❤️ We couldn’t do it without our neighbors. — Everyone at {store} {townTag}', why: 'Community posts build loyalty that a discount can’t buy.' },
        ],
      },
    },
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = { CONTENT };
  else root.CONTENT = CONTENT;
})(typeof window !== 'undefined' ? window : globalThis);
