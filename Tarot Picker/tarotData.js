/**
 * Deeper Interpretations Database for all 78 Tarot Cards
 * Categorized by: General, Love & Relationships, Career & Ambition, Finances & Wealth, Advice
 */
const tarotCardDetails = {
  "00-TheFool": {
    "name": "The Fool",
    "upright": {
      "general": "The Fool represents pure potential, fresh beginnings, and the courageous leap into the great unknown. It invites you to approach life with curiosity, unburdened by past regrets or rigid preconceptions. You stand on the precipice of an transformative journey.",
      "love": "A spontaneous and exciting romance is on the horizon. For couples, it signifies a playful reinvention of your connection and renewed lightness. For singles, keep your heart open to unexpected encounters without overanalyzing.",
      "career": "A bold new venture, career change, or innovative project is calling. Embrace being a beginner again and trust your unconventional ideas over standard conformity.",
      "finances": "Optimism regarding your financial path. You may discover novel ways to earn or invest, but balance your enthusiasm with practical common sense.",
      "advice": "Take the leap of faith with joyful trust. Leave cynical doubts behind and dare to walk a path you have never traveled before."
    },
    "reversed": {
      "general": "Reversed, The Fool warns of impulsive recklessness, overlooking obvious hazards, or conversely, being paralyzed by fear of the unknown. You may be hesitating when life asks you to step forward, or jumping without looking.",
      "love": "Careless behavior, emotional flippancy, or a fear of commitment could be causing turbulence. Be mindful of taking your partner for granted or rushing blindly into red flags.",
      "career": "Uncalculated professional risks, lack of preparation, or feeling aimless at work. Ground your ambitions with concrete plans before making drastic resignations or pivots.",
      "finances": "Impulsive spending, risky speculative investments, or failing to track your budget. Exercise caution and do not gamble with critical resources.",
      "advice": "Pause and look before you leap. Channel your spontaneity through thoughtful discernment rather than erratic restlessness."
    }
  },
  "01-TheMagician": {
    "name": "The Magician",
    "upright": {
      "general": "The Magician represents conscious mastery, focused willpower, and the bridge between spiritual vision and tangible reality ('As above, so below'). You possess every tool and resource required to manifest your intentions into the world.",
      "love": "Deep magnetic attraction, clear communication, and purposeful alignment. For singles, you have the confidence to draw in a meaningful partner. In relationships, proactive intimacy and honest dialogue flourish.",
      "career": "Peak creative productivity and strategic execution. Your skills, intellect, and persuasion are at their zenith. Perfect timing for pitching projects, launching businesses, or seeking leadership.",
      "finances": "Lucrative opportunities arising from your direct skills, ingenuity, and enterprise. You have the ability to transform creative ideas into material abundance.",
      "advice": "Align your focus and take purposeful action. Do not wait for circumstances to change\u2014harness your innate talents and shape your own reality."
    },
    "reversed": {
      "general": "Reversed, The Magician indicates untapped potential, scattered focus, or the misuse of charisma through deception, manipulation, or self-delusion. Energy is either blocked or directed toward hollow aims.",
      "love": "Deceptive communication, mixed signals, or a partner presenting a charming facade that masks hidden motives. Check for emotional manipulation or superficial charm.",
      "career": "Imposter syndrome, squandered talents, or manipulative office politics. You may feel uninspired or are attempting shortcuts that will undermine your reputation.",
      "finances": "Unreliable financial schemes, questionable promises, or disorganization in budgeting. Beware of deals that appear too good to be true.",
      "advice": "Realign with authentic integrity. Focus your scattered energies into disciplined practice and ensure your motives are pure and constructive."
    }
  },
  "02-TheHighPriestess": {
    "name": "The High Priestess",
    "upright": {
      "general": "The High Priestess embodies intuitive knowing, inner wisdom, the subconscious mind, and divine mystery. She sits between the conscious and unconscious realms, reminding you that truth is discovered in stillness rather than loud debate.",
      "love": "Deep soulful connection, unspoken emotional resonance, and spiritual bond. Trust your instincts regarding romantic feelings; what you sense intuitively is far more accurate than external appearances.",
      "career": "Navigating complex work situations with quiet insight and diplomacy. Hidden factors or proprietary insights will soon emerge to your advantage. Trust your gut regarding colleagues and strategy.",
      "finances": "Discretion regarding your finances. Keep monetary plans private for now. Pay attention to subtle shifts in contracts or agreements before signing.",
      "advice": "Step back from the noise and listen to your inner voice. Cultivate quiet reflection, meditate, and let the answers reveal themselves naturally."
    },
    "reversed": {
      "general": "Reversed, The High Priestess suggests that you are ignoring your intuition, succumbing to surface-level gossip, or suppressing your deeper feelings. Secrets, hidden motives, or emotional isolation may be present.",
      "love": "Emotional withholding, superficiality, or ignoring red flags your gut warned you about. A partner may be keeping secrets, or you are bottling up feelings out of self-protection.",
      "career": "Misinformation, hidden agendas, or feeling disconnected from your creative purpose. Do not make hasty decisions without verifying underlying facts.",
      "finances": "Hidden fees, obscured terms in financial documents, or making monetary choices based on faulty rumors rather than clear discernment.",
      "advice": "Re-establish contact with your intuitive self. Stop brushing off quiet gut feelings and look beyond surface illusions."
    }
  },
  "03-TheEmpress": {
    "name": "The Empress",
    "upright": {
      "general": "The Empress radiates maternal abundance, sensual beauty, creative fertility, and unconditional nurture. She represents the flowering of nature and the gentle power that allows ideas, art, and life to blossom in generous warmth.",
      "love": "Affectionate warmth, deep romance, emotional safety, and physical intimacy. A wonderful time for deepening bonds, starting a family, or rekindling passion through heartfelt care.",
      "career": "A fertile period of creative productivity. Collaborative projects flourish under empathetic guidance. Perfect time for artists, healers, builders, and designers to express their craft.",
      "finances": "Prosperity, comfort, and steady financial growth. Investments in home, self-care, and creative assets yield comforting security and satisfaction.",
      "advice": "Nurture yourself and those around you. Create beauty in your surroundings, practice self-compassion, and allow life to unfold organically without force."
    },
    "reversed": {
      "general": "Reversed, The Empress points to creative drought, overbearing smothering, codependency, or neglecting self-care. You may be giving away too much energy to others while leaving your own well completely dry.",
      "love": "Suffocating jealousy, emotional clinginess, or feeling unappreciated for all the domestic or emotional labor you provide. Rebalance boundaries.",
      "career": "Creative burnout, micromanagement, or feeling stagnant in uninspiring work. You need to recharge your inner creative reservoir before producing more output.",
      "finances": "Overspending on luxury items, emotional retail therapy, or financial dependence on others. Establish grounded budgeting habits.",
      "advice": "Refill your own cup first. Cultivate gentle boundaries and reconnect with nature and personal rejuvenation."
    }
  },
  "04-TheEmperor": {
    "name": "The Emperor",
    "upright": {
      "general": "The Emperor embodies structural authority, discipline, strategic sovereignty, and protective stability. He is the master architect who brings order out of chaos, creating secure foundations through clear vision and firm resolve.",
      "love": "Stability, long-term commitment, loyalty, and protective care. In relationships, this card brings mutual respect, reliability, and structured future planning.",
      "career": "Executive leadership, strategic clarity, and professional advancement. You are in a position to set standards, direct operations, and build enduring institutions.",
      "finances": "Financial stability achieved through strict budgeting, disciplined investing, and long-term planning. Material security is well protected.",
      "advice": "Establish clear boundaries, organize your priorities, and lead with principled integrity. Take ownership of your domain."
    },
    "reversed": {
      "general": "Reversed, The Emperor signifies authoritarian rigidity, tyranny, micromanagement, or a total breakdown of order and discipline. Either power is being abused, or self-control is lacking.",
      "love": "Power struggles, emotional coldness, domineering behavior, or an unwillingness to compromise. Avoid letting ego extinguish heartfelt tenderness.",
      "career": "A toxic boss, stifling corporate bureaucracy, or feeling powerless against organizational hierarchy. Alternatively, poor organization undermining your workflow.",
      "finances": "Financial instability stemming from reckless management, or extreme stinginess that impedes healthy cash flow and progress.",
      "advice": "Softened authority with empathy. Loosen rigid control, listen to alternate perspectives, and rebuild discipline through harmony rather than force."
    }
  },
  "05-TheHierophant": {
    "name": "The Hierophant",
    "upright": {
      "general": "The Hierophant represents sacred tradition, spiritual mentorship, shared wisdom, and established institutions. He connects seekers to collective heritage, education, and moral principles that have stood the test of time.",
      "love": "Shared moral values, traditional commitment, marriage, and deep mutual understanding. Partnering with someone who honors your spiritual and ethical foundations.",
      "career": "Success achieved through formal education, apprenticeship, mentorship, and working within structured organizations or established professional guilds.",
      "finances": "Safe, time-tested financial strategies. Trust conventional banking, reliable savings, and institutional advice over volatile speculative trends.",
      "advice": "Seek guidance from trusted mentors or proven wisdom traditions. Respect foundational values while deepening your understanding of the rules."
    },
    "reversed": {
      "general": "Reversed, The Hierophant urges you to break free from dogmatic thinking, rigid orthodoxy, and societal expectations that no longer serve your authentic spiritual growth.",
      "love": "Clashing belief systems, unconventional relationship structures, or rebelling against family expectations regarding romance and partnership.",
      "career": "Chafing against restrictive corporate bureaucracy. A desire to pursue freelance, innovative, or counter-cultural careers outside established systems.",
      "finances": "Exploring unconventional investments, alternative currencies, or rethinking traditional materialistic views on security.",
      "advice": "Question inherited dogmas and find your own authentic code of ethics. Do not conform simply to please the crowd."
    }
  },
  "06-TheLovers": {
    "name": "The Lovers",
    "upright": {
      "general": "The Lovers represents profound connection, harmonious union, soul alignment, and the critical moral choices that define personal values. It reflects the harmony between the conscious self and unconscious desires.",
      "love": "Passionate soul connection, mutual vulnerability, deep romantic harmony, and mutual respect. An invitation to open your heart fully and commit with authenticity.",
      "career": "Mutually rewarding business partnerships, collaborative synergy, and career choices guided by personal integrity rather than mere convenience.",
      "finances": "Making conscious financial choices that align with your deepest life values. Harmonizing spending and shared resources with a partner.",
      "advice": "Choose from love and core values rather than fear or social validation. Honor both unity and individual integrity in your commitments."
    },
    "reversed": {
      "general": "Reversed, The Lovers indicates disharmony, conflicting values, broken communication, or an agonizing dilemma where you are compromising your integrity.",
      "love": "Misalignment between partners, emotional disconnection, trust issues, or staying in a relationship out of convenience rather than genuine love.",
      "career": "Friction in professional partnerships, conflicting priorities, or ethical compromises in the workplace that violate your principles.",
      "finances": "Impulsive spending driven by short-term emotional highs, or arguments over money and unequal contributions in partnerships.",
      "advice": "Re-examine your core values. Do not compromise your truth for temporary peace; seek honest alignment within yourself first."
    }
  },
  "07-TheChariot": {
    "name": "The Chariot",
    "upright": {
      "general": "The Chariot symbolizes triumph through focused willpower, determination, self-discipline, and the mastery of opposing internal forces. You have the drive to overcome all obstacles and steer your life toward decisive victory.",
      "love": "Taking charge of your emotional destiny. Overcoming relationship obstacles through mutual determination, or pursuing romance with clear confidence.",
      "career": "High career momentum, professional conquest, ambition, and overcoming competitive challenges. Your dedication delivers breakthrough success.",
      "finances": "Decisive control over money. Clear financial targets and the disciplined drive required to eliminate debts and build substantial wealth.",
      "advice": "Stay focused on your goal and do not be deterred by distractions. Channel opposing emotions into unified, forward-moving determination."
    },
    "reversed": {
      "general": "Reversed, The Chariot warns of losing control, aggressive recklessness, burnout, or spinning your wheels due to lack of coordinated direction.",
      "love": "Trying to force an emotional outcome, steamrolling a partner's feelings, or feeling pulled apart by uncontrollable romantic turbulence.",
      "career": "Ambition turned ruthlessly aggressive, or feeling powerless against workplace momentum. Scattered energy leading to missed deadlines and frustration.",
      "finances": "Impulsive financial risks, speeding into transactions without safety cushions, or unexpected travel and vehicle expenses.",
      "advice": "Ease off the throttle. Reassess your strategy, regain emotional composure, and steer with patient precision rather than brute force."
    }
  },
  "08-Strength": {
    "name": "Strength",
    "upright": {
      "general": "Strength represents gentle courage, emotional resilience, compassion, and the quiet mastery of primal instincts. It teaches that true power comes not from aggression, but from unconditional self-acceptance and quiet grace.",
      "love": "Patience, compassionate understanding, and emotional maturity in romance. Taming relationship conflicts through tenderness, empathy, and openhearted vulnerability.",
      "career": "Steadfast endurance and moral courage. Navigating workplace politics or demanding tasks with calmness, patience, and unwavering confidence.",
      "finances": "Disciplined self-control regarding money. Avoiding emotional impulse purchases and maintaining steady, prudent financial stewardship.",
      "advice": "Respond to difficulty with kindness and inner fortitude. You do not need to fight to win; let your quiet inner strength speak for itself."
    },
    "reversed": {
      "general": "Reversed, Strength indicates self-doubt, depleted confidence, raw vulnerability, or reacting to challenges with defensive anger and primal fear.",
      "love": "Insecurity, codependency, letting fears dominate relationship communication, or giving in to emotional outbursts and resentment.",
      "career": "Imposter syndrome, feeling overwhelmed by pressure, or losing your temper with colleagues. You are doubting your capabilities.",
      "finances": "Compulsive spending triggered by stress or anxiety. Feeling helpless regarding material challenges instead of taking calm, step-by-step action.",
      "advice": "Be gentle with yourself. Forgive your perceived shortcomings, reclaim your inner worth, and breathe through current anxieties."
    }
  },
  "09-TheHermit": {
    "name": "The Hermit",
    "upright": {
      "general": "The Hermit represents soulful solitude, introspection, inner illumination, and walking away from external noise to find your personal truth. The lantern he carries illuminates only the next step on the inward journey.",
      "love": "A period of self-discovery before entering romance, or taking quiet space within a relationship to understand your true emotional needs.",
      "career": "Seeking deeper purpose beyond mere status or salary. Mentoring others, conducting independent research, or taking a sabbatical to recalibrate.",
      "finances": "Frugality, intentional simplicity, and valuing peace of mind over luxury consumption. Making prudent, well-researched financial choices.",
      "advice": "Carve out quiet time for yourself. Disconnect from external chatter and let your inner wisdom illuminate the way forward."
    },
    "reversed": {
      "general": "Reversed, The Hermit warns of unhealthy isolation, loneliness, stubborn withdrawal, or refusing valuable advice and companionship from others.",
      "love": "Feeling disconnected, building emotional walls, or turning inward to the point of pushing away someone who genuinely cares for you.",
      "career": "Antisocial behavior at work, rejecting teamwork, or clinging to obsolete methods out of stubbornness. Feeling alienated in your career.",
      "finances": "Being overly paranoid about money or, conversely, neglecting practical bills due to complete detachment from daily material realities.",
      "advice": "Step out of the cave. Reconnect with trusted friends, share your thoughts, and remember that wisdom is meant to be lived among others."
    }
  },
  "10-WheelOfFortune": {
    "name": "Wheel of Fortune",
    "upright": {
      "general": "The Wheel of Fortune symbolizes life's inevitable cycles, turning points, destiny, and sudden shifts of fortune. It reminds us that change is the only constant, urging adaptability and grace amidst life's great karmic wheel.",
      "love": "Karmic romantic encounters, unexpected plot twists in relationships, or feeling the wheel turn in favor of connection and renewal.",
      "career": "Favorable timing, sudden promotions, unexpected career opportunities, or serendipitous connections that propel your professional life forward.",
      "finances": "A shift in financial luck. Windfalls, profitable turns in investments, or improved financial circumstances. Save while the harvest is plentiful.",
      "advice": "Flow with the changes rather than resisting them. Embrace life's cyclical nature with humility, optimism, and proactive flexibility."
    },
    "reversed": {
      "general": "Reversed, the Wheel of Fortune signals setbacks, unexpected delays, resisting necessary changes, or feeling trapped in repeating negative cycles.",
      "love": "Stagnant relationship cycles, recurring arguments, or an unfortunate period where external timing seems to work against romantic plans.",
      "career": "Unexpected professional disruption, project delays, or feeling at the mercy of industry shifts. Do not panic; cycles always turn again.",
      "finances": "Sudden unexpected expenses or temporary material downturns. Avoid speculative gambles and focus on safeguarding your reserves.",
      "advice": "Acknowledge what is outside your control. Focus on what you can influence, break repetitive bad habits, and wait patiently for the wheel to turn."
    }
  },
  "11-Justice": {
    "name": "Justice",
    "upright": {
      "general": "Justice represents truth, ethical accountability, karmic balance, and clear-eyed fairness. The scales weigh all actions with complete impartiality, ensuring that truth emerges and balance is restored.",
      "love": "Honesty, mutual respect, and reciprocal equality. Relationships are strengthened through candid communication, transparent feelings, and fair treatment.",
      "career": "Legal resolution, fair contractual agreements, and professional recognition based on genuine merit and ethical conduct.",
      "finances": "Financial equilibrium, balanced accounts, and transparent dealings. Fair settlements, contract signing, and ethical wealth building.",
      "advice": "Act with uncompromised integrity and speak the truth. Weigh your options objectively and take full responsibility for your choices."
    },
    "reversed": {
      "general": "Reversed, Justice highlights bias, dishonesty, unfair treatment, avoiding personal accountability, or being on the receiving end of an unjust verdict.",
      "love": "Dishonesty, blaming each other, hidden secrets, or one partner feeling unfairly treated and burdened with unequal emotional responsibilities.",
      "career": "Unfair workplace politics, broken contractual promises, or being falsely accused. Alternatively, cutting corners ethically in your own work.",
      "finances": "Disputes over money, questionable contracts, unfair debts, or tax headaches. Ensure all your documentation is impeccably clear and legal.",
      "advice": "Examine where you may be deceiving yourself or others. Own your part, make amends, and pursue fairness above personal ego."
    }
  },
  "12-TheHangedMan": {
    "name": "The Hanged Man",
    "upright": {
      "general": "The Hanged Man symbolizes conscious surrender, intentional pause, letting go of control, and gaining an enlightened perspective by turning your worldview upside down.",
      "love": "Putting romantic demands on hold, releasing attachment to how things 'should' look, and viewing your partner through compassionate new eyes.",
      "career": "A productive career pause or period of waiting. Use this time for creative incubation, reframing your vocational strategy, and learning.",
      "finances": "Financial pause or delayed transactions. It advises against forcing investments; instead, re-evaluate what truly holds long-term value.",
      "advice": "Surrender the urge to force immediate outcomes. Suspend judgment, look at the situation from an inverted angle, and let clarity arrive in stillness."
    },
    "reversed": {
      "general": "Reversed, The Hanged Man warns of unnecessary martyrdom, stubborn resistance to change, feeling stuck in limbo, or making pointless sacrifices for nothing.",
      "love": "Stalling out in an unfulfilling relationship, playing the victim, or refusing to take a stand out of fear of confronting uncomfortable truths.",
      "career": "Procrastination disguised as waiting, feeling stalled in your role, or burning out through passive endurance without taking constructive action.",
      "finances": "Procrastinating on financial issues, holding onto depreciating assets, or making financial sacrifices that yield no return.",
      "advice": "Stop waiting passively for a rescue. Release self-pity, cut ties with unproductive sacrifices, and take active ownership of your path."
    }
  },
  "13-Death": {
    "name": "Death",
    "upright": {
      "general": "Death represents profound metamorphosis, the closure of old cycles, and clearing away what has withered to allow vibrant new life to emerge. It is not literal death, but the sacred doorway of irreversible rebirth.",
      "love": "The end of an obsolete relationship dynamic, or the necessary closure of an old partnership to make room for genuine, transformative love.",
      "career": "Leaving an outgrown career, company restructuring, or shedding obsolete projects. A powerful portal opening toward a fresh vocational rebirth.",
      "finances": "Transforming your financial habits. Eliminating debts, letting go of unprofitable ventures, and building a completely refreshed material foundation.",
      "advice": "Embrace the ending without clinging to the past. Trust the shedding process; only by releasing the dead leaves can spring bloom anew."
    },
    "reversed": {
      "general": "Reversed, Death signals stubborn resistance to change, clinging to what is already gone, fear of the unknown, and prolonging emotional stagnation.",
      "love": "Holding onto a toxic or dead relationship out of fear of loneliness. Inability to let go of an ex or past emotional betrayals.",
      "career": "Staying stuck in an unfulfilling job out of sheer comfort and fear of starting over. Resisting modernization or new professional skills.",
      "finances": "Refusing to adapt spending habits to a changed budget, or staying tied to failing business models due to denial.",
      "advice": "Release your tight grip on the past. Accept that this chapter is concluded so you can finally step into your next evolution."
    }
  },
  "14-Temperance": {
    "name": "Temperance",
    "upright": {
      "general": "Temperance represents inner alchemy, harmony, moderation, patience, and synthesizing dualities into balanced wholeness. It is the art of blending diverse energies with calm grace and spiritual centeredness.",
      "love": "Harmonious cooperation, emotional healing, mutual compromise, and peaceful balance. A deeply stabilizing influence in love and partnership.",
      "career": "Collaborative diplomacy, steady sustained progress, and successfully balancing multiple responsibilities without burning out.",
      "finances": "Balanced financial management, mindful budgeting, and steady wealth building through patience and moderation.",
      "advice": "Practice moderation and patience. Look for the golden middle path and blend different facets of your life into peaceful synthesis."
    },
    "reversed": {
      "general": "Reversed, Temperance points to extreme imbalance, impatience, excessive behavior, discord, or attempting to force things together that clash.",
      "love": "Frequent clashes, lack of compromise, emotional turbulence, or one partner dominating while the other gives up their peace.",
      "career": "Work-life imbalance, creative disharmony with colleagues, rushing projects prematurely, or scattered, erratic focus.",
      "finances": "Excessive consumer spending, financial volatility, or swinging between extreme thrift and reckless indulgence.",
      "advice": "Restore balance immediately. Step away from extremes, practice self-restraint, and give turbulent situations time to settle."
    }
  },
  "15-TheDevil": {
    "name": "The Devil",
    "upright": {
      "general": "The Devil represents shadow patterns, illusions of entrapment, toxic attachments, material obsession, and unconscious behaviors that hold you in self-imposed chains. It urges you to recognize that the chains around your neck are loose enough to remove.",
      "love": "Obsessive passion, codependency, lust disconnected from heart, emotional manipulation, or staying bonded through guilt and insecurity.",
      "career": "Feeling trapped in a soulless job for the money, toxic workplace cultures, or unethical practices driven by raw ambition.",
      "finances": "Trapped in debt, materialism driving poor financial choices, or falling prey to addictive spending and deceptive contracts.",
      "advice": "Confront your shadow with honesty. Recognize where you have surrendered your freedom, and break the self-imposed chains holding you back."
    },
    "reversed": {
      "general": "Reversed, The Devil heralds liberation, awakening from illusion, breaking addictions, and reclaiming personal power and sovereignty.",
      "love": "Walking away from a toxic dynamic, releasing codependency, and healing from past emotional control or obsession.",
      "career": "Leaving a soul-draining workplace, reclaiming creative independence, and refusing to compromise your moral compass for prestige.",
      "finances": "Taking proactive steps to pay off suffocating debt, overcoming consumerist urges, and gaining financial independence.",
      "advice": "Celebrate your newfound liberation, but stay vigilant against sliding back into comfortable old vices. Walk forward in freedom."
    }
  },
  "16-TheTower": {
    "name": "The Tower",
    "upright": {
      "general": "The Tower represents sudden revelation, the collapse of false illusions, lightning-bolt breakthroughs, and the necessary destruction of unstable foundations to make way for authentic truth.",
      "love": "Sudden relationship revelations, shocking truths coming to light, or the abrupt end of an unsustainable dynamic that forces growth.",
      "career": "Disruptive changes at work, sudden reorganizations, project pivots, or the collapse of an insecure corporate structure.",
      "finances": "Unexpected financial shakeups or emergency expenses. It forces you to build genuine financial resilience rather than resting on false security.",
      "advice": "Do not fight the collapse of what was built on false pretenses. Clear the rubble and prepare to rebuild upon solid, authentic ground."
    },
    "reversed": {
      "general": "Reversed, The Tower warns of delaying the inevitable, clinging to an unstable house of cards, or narrowly averting disaster while ignoring the root flaw.",
      "love": "Prolonging a fractured relationship out of terror of confrontation. Living in an atmosphere of suppressed tension that must eventually break.",
      "career": "Clinging to an unviable company or role while the writing is on the wall. Avoiding necessary professional transformation.",
      "finances": "Ignoring severe financial warnings, accumulating risky debts, or kicking material problems down the road.",
      "advice": "Stop trying to prop up what is crumbling. Acknowledge the reality and initiate the transition on your own terms before it is forced upon you."
    }
  },
  "17-TheStar": {
    "name": "The Star",
    "upright": {
      "general": "The Star radiates hope, spiritual renewal, serenity, inspiration, and divine guidance. Emerging after the storm of The Tower, it pours celestial healing into your spirit and affirms faith in your bright future.",
      "love": "Deep emotional healing, authentic vulnerability, optimistic romance, and a sense that love is aligned with your highest spiritual self.",
      "career": "Inspiring vision, creative renewal, and recognition for your authentic gifts. Working on projects that bring genuine meaning and uplift others.",
      "finances": "Renewed financial confidence and promising long-term growth. Financial worries begin to lift as positive avenues open up.",
      "advice": "Keep faith in the universe and in your own destiny. Share your authentic light freely and let hope guide your every step."
    },
    "reversed": {
      "general": "Reversed, The Star points to discouragement, temporary loss of faith, cynicism, low energy, and difficulty seeing the silver lining.",
      "love": "Insecurity, feeling unlovable, romantic despair, or losing trust in partnership due to lingering scars from the past.",
      "career": "Feeling uninspired, lack of creative faith, or feeling that your talents are overlooked. You are focusing on roadblocks rather than potential.",
      "finances": "Pessimism regarding financial prospects, feeling overwhelmed by economic pressures, or lacking a clear hopeful vision.",
      "advice": "Reconnect with your inner spark. Practice gratitude for small victories, release bitter cynicism, and rekindle your faith in the journey."
    }
  },
  "18-TheMoon": {
    "name": "The Moon",
    "upright": {
      "general": "The Moon represents the subconscious, dreams, illusions, intuition, and navigating through murky shadows and incomplete information. It teaches you to face anxieties and decipher hidden truths beneath the surface.",
      "love": "Emotional ambiguity, projections, unspoken fears, or confusion about a partner's true intentions. Things are not quite as they seem on the surface.",
      "career": "Unclear workplace directions, rumors, or hidden agendas. Avoid making binding commitments until the fog clears and all information is revealed.",
      "finances": "Financial uncertainty or murky terms. Thoroughly scrutinize contracts and avoid dubious investments while information remains obscured.",
      "advice": "Trust your deeper intuition rather than surface illusions. Acknowledge your fears without letting paranoia dictate your course."
    },
    "reversed": {
      "general": "Reversed, The Moon heralds the clearing of confusion, revelation of secrets, dispelling of irrational anxieties, and emerging from emotional fog into the light.",
      "love": "Truths unveiled, romantic miscommunications resolved, and seeing a partner or relationship with unfiltered clarity.",
      "career": "Uncovering behind-the-scenes realities, clarity returning to professional projects, and seeing past workplace illusions.",
      "finances": "Unmasking hidden costs, resolving confusing accounts, and regaining clear control over material budgets.",
      "advice": "Breathe easy as the shadows recede. Use the clarity you now possess to make grounded, fact-based choices."
    }
  },
  "19-TheSun": {
    "name": "The Sun",
    "upright": {
      "general": "The Sun embodies radiant joy, vitality, triumph, clarity, and warm abundance. It illuminates every shadow, bringing boundless optimism, creative success, and the pure celebration of being alive.",
      "love": "Joyful harmony, warm companionship, profound mutual adoration, and romantic fulfillment. A radiant time for celebration and love.",
      "career": "Public recognition, celebrated success, high vitality, and enthusiastic progress in professional endeavors.",
      "finances": "Financial abundance, profitable returns, and warm security. A wonderful time of material stability and generosity.",
      "advice": "Shine your light brightly with uninhibited joy. Embrace optimism, celebrate your achievements, and share your warmth with everyone around you."
    },
    "reversed": {
      "general": "Reversed, The Sun indicates temporary clouds dimming your joy, feeling uninspired, or finding it difficult to fully appreciate the blessings right in front of you.",
      "love": "Minor misunderstandings, feeling taken for granted, or struggling to maintain romantic enthusiasm amidst daily routine.",
      "career": "Delayed recognition, creative fatigue, or burnout from over-promising. Success is still near, but requires patience.",
      "finances": "Overly optimistic budgeting, overspending in celebration, or temporary delays in expected income.",
      "advice": "Look for the sunshine behind the temporary clouds. Cultivate gratitude, simplify your commitments, and reclaim your inner spark."
    }
  },
  "20-Judgement": {
    "name": "Judgement",
    "upright": {
      "general": "Judgement represents spiritual awakening, the higher calling, deep self-evaluation, redemption, and answering the trumpet of rebirth. You are invited to shed past regrets and step into a higher level of consciousness.",
      "love": "A transformative turning point in love. Forgiving past heartbreaks, honest reckoning, and elevating your relationship to mature commitment.",
      "career": "Discovering your true vocation, stepping into higher leadership, or making a definitive career choice aligned with your soul purpose.",
      "finances": "Honest financial assessment leading to constructive reform. Resolving long-standing debts or legal and financial settlements.",
      "advice": "Answer your higher calling without hesitation. Forgive yourself for past missteps, integrate the wisdom gained, and rise to your next level."
    },
    "reversed": {
      "general": "Reversed, Judgement signals self-doubt, harsh self-criticism, refusal to learn life's lessons, or ignoring an unmistakable call to change.",
      "love": "Dwelling on past grievances, repeating toxic relationship patterns, or being excessively judgmental toward your partner.",
      "career": "Hesitating to take a well-deserved promotion, imposter syndrome, or staying stuck in an unfulfilling role out of fear of evaluation.",
      "finances": "Ignoring mounting financial issues, regret over past investments, or avoiding necessary budget overhauls.",
      "advice": "Stop condemning yourself for old errors. Grant yourself grace, silence your harsh inner critic, and make the conscious choice to begin anew."
    }
  },
  "21-TheWorld": {
    "name": "The World",
    "upright": {
      "general": "The World represents complete wholeness, triumphant culmination, cosmic integration, and the successful conclusion of a monumental life journey. You have completed the circle and stand ready for the next level of existence.",
      "love": "Deep emotional fulfillment, lasting unity, feeling completely at home with your partner, or welcoming an extraordinary soulmate into your life.",
      "career": "Reaching a major professional pinnacle, project completion, global recognition, or mastering your chosen craft.",
      "finances": "Financial security, reaping the bountiful harvest of long-term investments, and complete peace of mind regarding material needs.",
      "advice": "Celebrate your monumental accomplishments. Honor how far you have traveled, integrate the lessons of this cycle, and prepare for the next chapter."
    },
    "reversed": {
      "general": "Reversed, The World points to unfinished business, feeling stuck right at the finish line, seeking closure, or feeling an empty void despite external achievements.",
      "love": "Lingering attachment to a past relationship, unresolved closure, or feeling that something essential is missing in your current romantic life.",
      "career": "Projects stalling right before completion, missing the final milestone, or lack of personal fulfillment despite reaching a goal.",
      "finances": "Nearly achieving financial goals but falling short due to last-minute oversights. Review your final accounts and wrap up loose ends.",
      "advice": "Tie up the loose ends and seek intentional closure. Do not abandon the work when you are just inches from the finish line."
    }
  },
  "Wands01": {
    "name": "Ace of Wands",
    "upright": {
      "general": "The Ace of Wands represents the raw spark of creative inspiration, passionate vitality, bold initiative, and an enthusiastic breakthrough that ignites your spirit.",
      "love": "Electric romantic chemistry, exciting new attraction, reignited passion in relationships, and spontaneous romantic gestures.",
      "career": "A thrilling new business idea, entrepreneurial venture, or creative surge. You are filled with the drive to pioneer something extraordinary.",
      "finances": "Positive momentum for new financial endeavors, startup ventures, or side hustles powered by your creative energy.",
      "advice": "Seize the fiery inspiration and act immediately. Don't wait for permission\u2014channel your enthusiasm into bold, tangible steps."
    },
    "reversed": {
      "general": "Reversed, the Ace of Wands points to creative blocks, lack of direction, depleted energy, impatience, or fiery passion that fizzles out without execution.",
      "love": "Fading romantic spark, frustration with slow progress in dating, or misdirected temper causing unnecessary friction.",
      "career": "Delays in project launches, lack of inspiration, feeling unmotivated, or pursuing ideas without sufficient fuel or structure.",
      "finances": "Financial ventures stalling due to poor timing or lack of focus. Avoid investing in ungrounded passion projects without thorough research.",
      "advice": "Rest and rekindle your inner fire. Don't force creativity when you feel depleted; wait for genuine enthusiasm to return."
    }
  },
  "Wands02": {
    "name": "Two of Wands",
    "upright": {
      "general": "The Two of Wands symbolizes strategic foresight, personal power, holding the world in your hands, and making decisive plans to step beyond your comfort zone.",
      "love": "Planning a shared future with a partner, discussing long-term horizons, or deciding whether to commit deeply to an expansive journey together.",
      "career": "Broadening professional horizons, global opportunities, long-term strategic planning, and preparing to scale your business or career.",
      "finances": "Sound financial planning for future expansion. Evaluating investments with an eye on long-term prosperity rather than quick gains.",
      "advice": "Look out toward the horizon and plan with bold ambition. Step out of familiar territory and prepare for expansive growth."
    },
    "reversed": {
      "general": "Reversed, the Two of Wands signals fear of the unknown, hesitation, poor planning, feeling restricted, or playing it too safe.",
      "love": "Diverging future goals between partners, reluctance to commit to shared plans, or fear of stepping into romantic vulnerability.",
      "career": "Reluctance to take necessary career risks, bureaucratic delays, or feeling trapped in a comfortable but uninspiring position.",
      "finances": "Misjudged financial forecasting, fear of investing, or financial plans disrupted by unexpected external developments.",
      "advice": "Confront your fear of the unfamiliar. Staying in your safe bubble is currently holding you back from true growth."
    }
  },
  "Wands03": {
    "name": "Three of Wands",
    "upright": {
      "general": "The Three of Wands represents expansion, waiting for your ships to come in, forward momentum, and watching the fruits of your initial efforts begin to arrive.",
      "love": "Expanding romantic horizons, travel with a partner, long-distance relationships succeeding, and optimistic relationship growth.",
      "career": "Commercial success, overseas expansion, fruitful collaborations, and confident strides in your professional domain.",
      "finances": "Financial returns on past investments beginning to materialize. Opportunities to diversify your income across new channels.",
      "advice": "Maintain your vantage point with quiet confidence. Keep your eyes on the long game as your ventures begin to bear fruit."
    },
    "reversed": {
      "general": "Reversed, the Three of Wands indicates frustrated waiting, delayed ships, setbacks in expansion plans, or disappointment with initial returns.",
      "love": "Challenges in long-distance connections, feeling stuck in relationship progress, or unmet expectations regarding travel and shared dreams.",
      "career": "Supply chain delays, canceled contracts, or feeling that your professional expansion has hit an unexpected wall.",
      "finances": "Delays in expected payments, sluggish investment returns, or unexpected costs associated with expansion.",
      "advice": "Exercise patient resilience. Re-evaluate your logistics, address bottlenecks, and don't abandon the ship during temporary delays."
    }
  },
  "Wands04": {
    "name": "Four of Wands",
    "upright": {
      "general": "The Four of Wands represents joyous celebration, harmonious homecoming, community milestones, stable foundations, and the sweet harvest of collaborative work.",
      "love": "Weddings, engagements, moving in together, harmonious family life, and celebrating deep romantic security with loved ones.",
      "career": "Reaching a major professional milestone, celebratory team culture, successful project completion, and a supportive workplace environment.",
      "finances": "Financial stability providing a comfortable, welcoming home. Investing in real estate, home renovations, and family security.",
      "advice": "Pause to celebrate your achievements with those you love. Bask in the warmth of community and honor the sanctuary you have built."
    },
    "reversed": {
      "general": "Reversed, the Four of Wands signals tension at home, canceled gatherings, feeling like an outsider in community, or transient instability.",
      "love": "Family interference in romance, postponement of celebrations or weddings, or feeling uncomfortable in domestic living arrangements.",
      "career": "Workplace friction, delayed milestones, or a fractured team environment where achievements are not properly acknowledged.",
      "finances": "Unexpected domestic expenses, moving costs, or financial disputes within the family unit.",
      "advice": "Focus on restoring peace in your immediate sanctuary. Address underlying domestic grievances with patience and openhearted dialogue."
    }
  },
  "Wands05": {
    "name": "Five of Wands",
    "upright": {
      "general": "The Five of Wands represents lively competition, creative brainstorming, minor clashes of egos, banter, and the testing of ideas in an active arena.",
      "love": "Playful bickering, differing communication styles, or petty jealousy causing minor friction. A call to listen actively rather than just debating.",
      "career": "Intense competition for promotions or clients, heated team debates, and the need to assert your unique value amidst noisy rivals.",
      "finances": "Conflicting financial advice, competing demands on your budget, or minor financial rivalries.",
      "advice": "Stand tall in the arena without taking competition personally. Use friction to sharpen your skills and clarify your unique stance."
    },
    "reversed": {
      "general": "Reversed, the Five of Wands indicates avoiding necessary confrontation, escalating toxic conflict, or exhausting yourself in petty power struggles.",
      "love": "Suppressed anger erupting into bitter arguments, or exhausting friction that drains the warmth from your relationship.",
      "career": "Destructive office politics, underhanded competition, or retreating from conflict when you need to defend your work.",
      "finances": "Costly legal disputes, losing money through competitive bidding wars, or arguments over shared resources.",
      "advice": "Pick your battles wisely. Walk away from pointless ego contests and focus your valuable energy on constructive, peaceful pursuits."
    }
  },
  "Wands06": {
    "name": "Six of Wands",
    "upright": {
      "general": "The Six of Wands symbolizes public triumph, well-deserved recognition, victory parades, confidence, and receiving acclaim for your dedicated efforts.",
      "love": "Pride in your partner, celebrated relationship milestones, and being admired and appreciated in romance.",
      "career": "Promotions, public accolades, successful launches, industry recognition, and emerging as a respected leader in your field.",
      "finances": "Financial rewards following successful ventures. Increased income, bonuses, and reaping the profits of your hard work.",
      "advice": "Accept praise with genuine grace and humility. Celebrate your victory, but stay grounded so success elevates rather than swells your ego."
    },
    "reversed": {
      "general": "Reversed, the Six of Wands points to fall from grace, lack of recognition, imposter syndrome, public criticism, or an inflated ego alienating others.",
      "love": "Seeking validation outside the relationship, feeling underappreciated by a partner, or relationship conflicts made messily public.",
      "career": "Overlooked for a promotion, failed presentations, public criticism, or losing confidence after an ambitious bid.",
      "finances": "Disappointing returns on a high-profile venture, or overspending simply to maintain a luxurious, boastful facade.",
      "advice": "True self-worth does not depend on public applause. Rebuild your confidence from within and focus on the integrity of your craft."
    }
  },
  "Wands07": {
    "name": "Seven of Wands",
    "upright": {
      "general": "The Seven of Wands represents holding the high ground, defending your principles, fierce perseverance, and standing firm against overwhelming odds or criticism.",
      "love": "Defending your relationship against outside disapproval, establishing healthy emotional boundaries, and fighting for what you love.",
      "career": "Protecting your position against competitive challenges, defending creative ideas, and holding your ground under pressure.",
      "finances": "Guarding your financial assets, resisting aggressive sales tactics, and maintaining strict budget discipline against demands.",
      "advice": "Stand your ground with courage and conviction. You possess the vantage point and moral strength to withstand any challenge."
    },
    "reversed": {
      "general": "Reversed, the Seven of Wands warns of defensive exhaustion, feeling overwhelmed, surrender to relentless pressure, or stubborn defensiveness that blinds you.",
      "love": "Feeling constantly attacked or judged by a partner, giving up on communication out of sheer fatigue, or hyper-defensive paranoia.",
      "career": "Buckling under workplace pressure, losing your competitive edge, or stubbornly defending outdated strategies that no longer work.",
      "finances": "Overwhelmed by financial demands, caving to pressure to spend, or failing to defend your financial interests in negotiations.",
      "advice": "Pick which hill is truly worth dying on. Release petty defensiveness, rest your weary spirit, and seek allies rather than fighting alone."
    }
  },
  "Wands08": {
    "name": "Eight of Wands",
    "upright": {
      "general": "The Eight of Wands represents rapid acceleration, swift communications, sudden breakthroughs, travel, and multiple moving pieces aligning smoothly in mid-air.",
      "love": "Whirlwind romance, rapid progression in dating, flirty messages flying back and forth, and spontaneous romantic travel.",
      "career": "Fast-paced projects, swift email exchanges, immediate approvals, and rapid career progression. Keep up with the fast-moving current!",
      "finances": "Fast transactions, sudden financial gains, or quick turnaround on investments. Money moves swiftly.",
      "advice": "Strike while the iron is hot. Ride the incoming wave of momentum with focus, clear communication, and prompt action."
    },
    "reversed": {
      "general": "Reversed, the Eight of Wands indicates miscommunications, frustrating delays, panic from rushed action, or moving ahead before you are fully prepared.",
      "love": "Mixed signals, hasty declarations you later regret, romantic impatience, or plans disrupted by travel delays.",
      "career": "Scattered focus, missed deadlines due to overwhelm, hasty work full of errors, or messages lost in translation.",
      "finances": "Impulsive online purchases, delays in wire transfers, or rushing into financial agreements without reading the fine print.",
      "advice": "Slow down and take a breath. Double-check all details, clarify your messaging, and don't let frenzy replace purposeful execution."
    }
  },
  "Wands09": {
    "name": "Nine of Wands",
    "upright": {
      "general": "The Nine of Wands represents resilience, grit, the final stand, guarding your boundaries, and finding the stamina to cross the finish line despite battle fatigue.",
      "love": "Guarding an emotionally bruised heart, fear of getting hurt again, but possessing the resilience to build healthy, protective love.",
      "career": "The final stretch of a grueling project. You are tired, but your experience and persistence will carry you through to completion.",
      "finances": "Defending your hard-earned savings, weather-proofing your finances against unexpected shocks, and remaining vigilant.",
      "advice": "You are far stronger than you realize. Dig deep for that final burst of stamina; the finish line is just around the corner."
    },
    "reversed": {
      "general": "Reversed, the Nine of Wands warns of total exhaustion, paranoia, refusing to drop your guard, or giving up right before the victory.",
      "love": "Hyper-vigilance sabotaging intimacy, projecting past betrayals onto an innocent partner, or emotional exhaustion from endless defenses.",
      "career": "Severe burnout, refusing to delegate, seeing hostility in every colleague, or dropping the ball in the final hour due to fatigue.",
      "finances": "Exhaustion from managing debts, letting financial defenses down at the wrong moment, or feeling paranoid about money.",
      "advice": "Lower your defensive walls slightly. Allow supportive people to assist you, get restorative rest, and realize you are no longer in danger."
    }
  },
  "Wands10": {
    "name": "Ten of Wands",
    "upright": {
      "general": "The Ten of Wands represents carrying a heavy burden, overcommitment, taking on too much responsibility, and struggling under the weight of your own ambition.",
      "love": "Feeling emotionally overburdened in a relationship, carrying all the domestic/emotional labor, and feeling romance smothered by chores.",
      "career": "Overworked, burning the candle at both ends, inability to say 'no', and micro-managing every detail until you break down.",
      "finances": "Weighed down by heavy financial obligations, debts, or supporting others at the expense of your own security.",
      "advice": "Learn to delegate and set boundaries. Drop the sticks that do not belong to you; success is meaningless if it breaks your back."
    },
    "reversed": {
      "general": "Reversed, the Ten of Wands points to releasing impossible burdens, collapsing under strain, learning to say no, or suffering from stubborn martyrdom.",
      "love": "Releasing unequal emotional burdens, confronting an unbalanced partnership, or breaking free from a draining relationship.",
      "career": "Handing off tasks, stepping back from an unsustainable workload, or suffering an inevitable burnout if you refuse to change.",
      "finances": "Refinancing burdensome debts, cutting non-essential commitments, or realizing you cannot finance everyone else's dreams.",
      "advice": "Put down the heavy load immediately. Prioritize ruthlessly and grant yourself permission to breathe and rest."
    }
  },
  "Wands11": {
    "name": "Page of Wands",
    "upright": {
      "general": "The Page of Wands represents youthful enthusiasm, inquisitive exploration, creative sparks, free-spirited curiosity, and receiving inspiring messages.",
      "love": "Playful flirtation, lighthearted romance, adventurous dates, and connecting with someone whose infectious energy delights your spirit.",
      "career": "Exciting entry-level projects, learning new creative skills, pitching fresh ideas, and bringing spirited energy to the team.",
      "finances": "Exploring creative side hustles or small exploratory investments. High enthusiasm for financial learning.",
      "advice": "Say yes to creative curiosity! Explore new interests with an open, joyful heart without worrying about perfection."
    },
    "reversed": {
      "general": "Reversed, the Page of Wands indicates scattered excitement without follow-through, childish tantrums, unreliable energy, or disappointing news.",
      "love": "Superficial flirting that leads nowhere, emotional immaturity, drama-seeking behavior, or broken romantic promises.",
      "career": "Starting ten projects and finishing none, lack of discipline, procrastination, or receiving frustrating news regarding work.",
      "finances": "Impulsive spending on fleeting hobbies, lack of practical budgeting, or falling for trendy get-rich-quick schemes.",
      "advice": "Pair your vibrant excitement with follow-through. Commit to seeing one creative idea through to completion before chasing the next."
    }
  },
  "Wands12": {
    "name": "Knight of Wands",
    "upright": {
      "general": "The Knight of Wands embodies daring action, charismatic pursuit, fearless adventure, and charging forward with passionate conviction.",
      "love": "Passionate, sweep-you-off-your-feet romance, magnetic charm, and exciting spontaneous dates. Watch out for commitment hesitation.",
      "career": "Bold career moves, entrepreneurial drive, fearless presentations, and taking risks that outpace more hesitant colleagues.",
      "finances": "Aggressive investments, chasing bold opportunities, but requiring a steady hand to avoid impulsive speculation.",
      "advice": "Harness your courageous momentum. Charge ahead with charismatic confidence and let your authentic passion inspire the room."
    },
    "reversed": {
      "general": "Reversed, the Knight of Wands warns of reckless arrogance, volatile temper, rushing without thinking, burnout, or abandoning ship when the initial rush fades.",
      "love": "Love-bombing followed by sudden ghosting, volatile arguments, selfishness, or inability to handle mature commitment.",
      "career": "Reckless workplace behavior, bulldozing colleagues, making rash promises you cannot deliver, or quitting prematurely.",
      "finances": "Risky financial gambles, impulsive big-ticket purchases, or burning through savings on high-risk ventures.",
      "advice": "Channel your fire into steady warmth rather than explosive destruction. Slow down and consider the long-term consequences of your actions."
    }
  },
  "Wands13": {
    "name": "Queen of Wands",
    "upright": {
      "general": "The Queen of Wands radiates vibrant self-assurance, social warmth, creative magnetism, independent leadership, and infectious zest for life.",
      "love": "Confident romance, deep loyalty, magnetic attraction, and an equal partnership where both lovers inspire and celebrate each other.",
      "career": "Charismatic leadership, creative direction, inspiring team members, and building a thriving brand or business with warmth and authority.",
      "finances": "Confident financial management, investing in quality and personal growth, and creating prosperity through creative enterprise.",
      "advice": "Step into your full radiance. Own your unique gifts, lead with generous warmth, and let your confidence light up the world."
    },
    "reversed": {
      "general": "Reversed, the Queen of Wands points to insecurity masked as arrogance, jealousy, domineering drama, or dimmed vitality and creative burnout.",
      "love": "Jealousy, demanding constant attention, mood swings, or feeling insecure and diminished in your partnership.",
      "career": "Micromanagement, taking professional feedback as personal attacks, or feeling that your creative voice has been suppressed.",
      "finances": "Impulsive vanity spending, maintaining an expensive appearance to mask inner anxiety, or neglect of practical bills.",
      "advice": "Reclaim your inner glow from within. Stop comparing yourself to others and nourish your creative soul without needing external approval."
    }
  },
  "Wands14": {
    "name": "King of Wands",
    "upright": {
      "general": "The King of Wands embodies visionary leadership, entrepreneurial mastery, high ambition, inspiring integrity, and the ability to turn bold visions into reality.",
      "love": "Passionate, protective, and dedicated partnership. A partner who leads with respect, honors your dreams, and encourages mutual growth.",
      "career": "Executive visionary, launching grand enterprises, commanding respect through proven results, and empowering others to succeed.",
      "finances": "Substantial wealth building through long-term vision, enterprise, and wise risk calculation. Sound financial leadership.",
      "advice": "Lead with high vision and bold integrity. Inspire others by example and turn your grand ideas into enduring achievements."
    },
    "reversed": {
      "general": "Reversed, the King of Wands warns of tyrannical behavior, ruthless impatience, unrealistic expectations, or an overbearing ego alienating allies.",
      "love": "Domineering behavior, stubbornness, putting career endlessly above relationship needs, or imposing unrealistic demands on a partner.",
      "career": "Autocratic leadership, dismissing team feedback, taking hazardous risks, or failing to execute because of arrogant overconfidence.",
      "finances": "Financial losses from stubborn, high-ego investments, or lavish spending to feed a grandiose self-image.",
      "advice": "Balance ambition with humble empathy. True kings inspire devotion through wisdom and care, not through intimidation or brute force."
    }
  },
  "Cups01": {
    "name": "Ace of Cups",
    "upright": {
      "general": "The Ace of Cups represents the unbridled overflow of pure love, emotional renewal, spiritual awakening, compassion, and the opening of the heart.",
      "love": "A breathtaking new romantic beginning, falling in love, emotional rejuvenation, forgiveness, and profound heartfelt intimacy.",
      "career": "Finding deep emotional fulfillment in your work, artistic inspiration, empathetic connection with clients, and meaningful purpose.",
      "finances": "Financial peace of mind, generosity, and material abundance that supports emotional wellness and family joy.",
      "advice": "Open your heart completely. Allow love, creativity, and spiritual grace to flow into your life without fear of vulnerability."
    },
    "reversed": {
      "general": "Reversed, the Ace of Cups points to emotional drainage, repressed vulnerability, blocked intuition, heartbreak, or feeling unloved.",
      "love": "Guarded heart, fear of intimacy, emotional coldness, or giving endlessly to someone who drains your emotional reservoir.",
      "career": "Feeling disconnected from your work, creative block, burnout from emotionally taxing jobs, or lack of empathy from colleagues.",
      "finances": "Financial stress impacting your emotional well-being, or emotional retail therapy to fill an inner void.",
      "advice": "Practice tender self-love and emotional boundaries. Stop pouring from an empty cup and allow your own heart to heal."
    }
  },
  "Cups02": {
    "name": "Two of Cups",
    "upright": {
      "general": "The Two of Cups symbolizes mutual attraction, harmonious partnership, heartfelt reciprocity, soulmate connections, and the beauty of two souls meeting in equality.",
      "love": "Profound romantic harmony, equal giving and receiving, deep mutual respect, falling in love, and reconciliations.",
      "career": "Mutually beneficial business partnerships, productive contracts, harmonious co-working, and shared professional vision.",
      "finances": "Fair financial agreements, shared financial goals with a partner, and balanced monetary cooperation.",
      "advice": "Cultivate heartfelt reciprocity. Meet the other person halfway with honesty, warmth, and mutual respect."
    },
    "reversed": {
      "general": "Reversed, the Two of Cups signals miscommunication, imbalance in giving, codependency, severed trust, or growing emotional distance.",
      "love": "One-sided effort in romance, constant misunderstandings, emotional withdrawal, or a breakup due to unequal respect.",
      "career": "Broken partnerships, conflicting business goals, hidden rivalries, or breach of contract between partners.",
      "finances": "Financial disputes in joint accounts, unequal contributions to household expenses, or unfair business splits.",
      "advice": "Address imbalances directly. Communicate openly about your needs and ensure you are honoring both yourself and your partner equally."
    }
  },
  "Cups03": {
    "name": "Three of Cups",
    "upright": {
      "general": "The Three of Cups represents joyful friendship, sisterhood and brotherhood, creative collaboration, festive reunions, and shared emotional celebration.",
      "love": "Celebration in love, socializing with friends as a couple, meeting a romantic partner through your social circle, or joyful group dates.",
      "career": "Harmonious teamwork, celebrating a team win, supportive colleagues, and productive collaborative creativity.",
      "finances": "Spending on celebrations, dinners, and events. Healthy finances that allow you to share good times with dear friends.",
      "advice": "Connect with your soul tribe. Celebrate life's blessings in good company and nurture the friendships that uplift your spirit."
    },
    "reversed": {
      "general": "Reversed, the Three of Cups indicates social exhaustion, gossip, feeling excluded from a friend group, or overindulgence in party culture.",
      "love": "Third-party interference in romance, rumors causing relationship strain, or excessive partying neglecting the relationship.",
      "career": "Cliques at work, office gossip undermining trust, or an uncoordinated team failing to deliver on joint promises.",
      "finances": "Overspending on social outings, peer pressure to spend beyond your means, or disputes over splitting group bills.",
      "advice": "Step back from drama and toxic social circles. Focus on authentic, private friendships that offer genuine mutual support."
    }
  },
  "Cups04": {
    "name": "Four of Cups",
    "upright": {
      "general": "The Four of Cups represents apathy, contemplation, emotional stagnation, feeling uninspired, and overlooking an offered gift or opportunity right in front of you.",
      "love": "Boredom in romance, taking your partner for granted, withdrawing into an emotional shell, or ignoring genuine romantic suitors.",
      "career": "Feeling unfulfilled and disengaged at work, missing a promising promotion or project because you are dwelling on past disappointments.",
      "finances": "Dissatisfaction with your current material state despite having adequate security. Taking what you have for granted.",
      "advice": "Shift your focus. Stop fixating on what went wrong or what you lack, and open your eyes to the new cup being offered to you right now."
    },
    "reversed": {
      "general": "Reversed, the Four of Cups signals awakening from emotional apathy, fresh perspective, renewed enthusiasm, and reaching out to accept support.",
      "love": "Breaking out of relationship rut, renewed appreciation for a partner, or finally stepping out of isolation to date again.",
      "career": "Regaining motivation, discovering new inspiration at work, and actively seizing career opportunities you previously ignored.",
      "finances": "Taking proactive control of finances, recognizing overlooked avenues for income, and practicing gratitude for material blessings.",
      "advice": "Embrace this burst of renewed energy. Say yes to opportunities and engage fully with the vibrant world around you."
    }
  },
  "Cups05": {
    "name": "Five of Cups",
    "upright": {
      "general": "The Five of Cups represents grief, sorrow, focusing on spilled milk, and mourning what was lost, while gently reminding you that two full cups still stand behind you.",
      "love": "Heartbreak, regret over past relationship mistakes, mourning an ex, or feeling disillusioned by romantic disappointments.",
      "career": "Mourning a lost job, failed pitch, or professional disappointment. Feeling discouraged by setbacks.",
      "finances": "Financial losses, regret over poor investments, or mourning material security that slipped away.",
      "advice": "Allow yourself to grieve, but do not dwell endlessly on what is gone. Turn around and embrace the love and opportunities that remain intact."
    },
    "reversed": {
      "general": "Reversed, the Five of Cups indicates emotional healing, accepting the past, forgiving old wounds, and moving forward with renewed hope.",
      "love": "Releasing an ex, healing from heartbreak, forgiving a partner, and opening your heart to fresh romantic happiness.",
      "career": "Bouncing back from career setbacks, learning from past failures, and pursuing new opportunities with seasoned resilience.",
      "finances": "Recovering from financial losses, rebuilding your savings, and learning valuable budgeting wisdom from past errors.",
      "advice": "Leave the past where it belongs. Pick up your remaining cups and walk forward with hard-won wisdom and gratitude."
    }
  },
  "Cups06": {
    "name": "Six of Cups",
    "upright": {
      "general": "The Six of Cups represents sweet nostalgia, innocent memories, childhood joys, kindness, reunion with old friends or lovers, and pure unconditional generosity.",
      "love": "Rekindling an old romance, childhood sweethearts, gentle tenderness, and comfort in familiar, safe emotional connections.",
      "career": "Returning to a former career passion, working with childhood friends, or drawing inspiration from your earliest creative dreams.",
      "finances": "Receiving gifts, inheritance, family financial support, or sharing resources generously with loved ones.",
      "advice": "Honor your roots and the lessons of your past. Approach today's challenges with the pure, unpretentious wonder of a child."
    },
    "reversed": {
      "general": "Reversed, the Six of Cups warns of living in the past, viewing history through rose-colored glasses, clinging to outgrown dynamics, or refusal to grow up.",
      "love": "Comparing new partners to an idealized ex, clinging to childhood relationship habits, or inability to build mature adult intimacy.",
      "career": "Clinging to outdated skills, feeling trapped in nostalgia for past glories, or outgrowing a family business.",
      "finances": "Financial dependence on family, childish avoidance of adult financial responsibilities, or disputes over family heirlooms.",
      "advice": "Release the grip of the past. Appreciate your memories, but root yourself firmly in the present where your future is being built."
    }
  },
  "Cups07": {
    "name": "Seven of Cups",
    "upright": {
      "general": "The Seven of Cups represents abundant choices, vivid daydreams, illusions, wishful thinking, and the need to separate glittering fantasy from grounded reality.",
      "love": "Idealizing love, confusing infatuation with genuine commitment, having multiple suitors, or paralysis by romantic choice.",
      "career": "A dizzying array of career options or ideas, but lack of concrete action. Beware of shiny object syndrome and hollow promises.",
      "finances": "Tempting get-rich-quick schemes, speculative mirages, or daydreaming about wealth without executing a disciplined plan.",
      "advice": "Discern between fantasy and grounded reality. Narrow your choices, ground your dreams in tangible reality, and commit to one clear path."
    },
    "reversed": {
      "general": "Reversed, the Seven of Cups signals cutting through mental fog, gaining sharp discernment, making a definitive choice, and dispelling illusions.",
      "love": "Seeing through romantic illusions, recognizing a partner's true character, and choosing commitment over endless superficial options.",
      "career": "Selecting a clear career direction, eliminating distracting projects, and focusing on viable, practical execution.",
      "finances": "Avoiding deceptive financial traps, seeing through false promises, and implementing a realistic, grounded budget.",
      "advice": "Trust your newfound clarity. Make the necessary decision and invest your energy into tangible, step-by-step progress."
    }
  },
  "Cups08": {
    "name": "Eight of Cups",
    "upright": {
      "general": "The Eight of Cups represents walking away, seeking deeper spiritual meaning, leaving behind what no longer serves your soul, and embarking on a transformative pilgrimage.",
      "love": "Walking away from an unfulfilling relationship, realizing that emotional comfort is not enough, and seeking genuine soulful connection.",
      "career": "Leaving a secure but soul-deadening job, walking away from uninspiring work, and pursuing a vocation with true meaning.",
      "finances": "Letting go of excessive materialism, downsizing to gain spiritual freedom, or divesting from investments that violate your values.",
      "advice": "Have the courage to walk away from what is half-empty. Head toward the mountains and seek the deeper fulfillment your spirit craves."
    },
    "reversed": {
      "general": "Reversed, the Eight of Cups points to fear of moving on, remaining in stagnation, returning to toxic dynamics, or aimless wandering.",
      "love": "Staying in a dead-end relationship out of fear of being alone, repeatedly returning to an ex, or running away at the first sign of difficulty.",
      "career": "Staying stuck in an unfulfilling job, fear of seeking better pastures, or endlessly job-hopping without building lasting roots.",
      "finances": "Clinging to unprofitable assets out of stubbornness, or running away from financial duties instead of facing them.",
      "advice": "Examine what holds you back. True security comes from honoring your inner growth, not from staying chained to familiar misery."
    }
  },
  "Cups09": {
    "name": "Nine of Cups",
    "upright": {
      "general": "The Nine of Cups represents the 'Wish Card'\u2014emotional contentment, satisfaction, gratitude, comfort, pleasure, and the fulfillment of your heartfelt desires.",
      "love": "Romantic bliss, deep emotional satisfaction, feeling cherished, and celebrating love with genuine joy and mutual appreciation.",
      "career": "Achieving your vocational dreams, professional satisfaction, working in a role you love, and enjoying the respect of peers.",
      "finances": "Material comfort, abundance, enjoying the fruits of your labor, and financial peace that allows delightful indulgence.",
      "advice": "Celebrate your blessings with a heart full of gratitude. Savor this moment of contentment and share your joy with others."
    },
    "reversed": {
      "general": "Reversed, the Nine of Cups warns of superficial pleasure, smugness, overindulgence, greed, or feeling an empty void despite getting what you wished for.",
      "love": "Taking your partner for granted, self-centeredness in romance, or discovering that an idealized romantic fantasy lacks emotional depth.",
      "career": "Resting on your laurels, complacency, or achieving a milestone only to realize it doesn't bring the spiritual satisfaction you expected.",
      "finances": "Overspending on lavish indulgences, gluttony, or financial dissatisfaction stemming from comparing yourself to others.",
      "advice": "Look beyond surface pleasures. Cultivate genuine inner gratitude and make sure your desires align with your soul's deeper values."
    }
  },
  "Cups10": {
    "name": "Ten of Cups",
    "upright": {
      "general": "The Ten of Cups represents ultimate emotional fulfillment, lasting peace, domestic harmony, family joy, divine alignment, and the rainbow of shared love.",
      "love": "Lifelong commitment, harmonious marriage, deep emotional security, blissful domestic partnership, and thriving family connections.",
      "career": "A peaceful, supportive work environment, alignment between career and personal life, and feeling deeply fulfilled by your vocational calling.",
      "finances": "Generational wealth, financial security supporting family well-being, and having more than enough to create a safe, loving home.",
      "advice": "Treasure your loved ones and the emotional sanctuary you share. Recognize that true wealth resides in loving relationships and peace of mind."
    },
    "reversed": {
      "general": "Reversed, the Ten of Cups points to domestic tension, shattered ideals, family conflict, feeling disconnected from loved ones, or chasing an unrealistic image of perfection.",
      "love": "Marital friction, differing values regarding family or living situations, or maintaining a fake smile for public appearances while unhappy inside.",
      "career": "Work-life conflict where job demands damage family relationships, or toxic team dynamics destroying workplace harmony.",
      "finances": "Financial disputes within the family, arguments over inheritance, or financial strain threatening domestic tranquility.",
      "advice": "Address family and romantic tensions with patience and honest vulnerability. Drop the pressure of looking perfect and focus on genuine healing."
    }
  },
  "Cups11": {
    "name": "Page of Cups",
    "upright": {
      "general": "The Page of Cups represents sweet intuition, emotional curiosity, poetic messages, creative flow, and openhearted wonder.",
      "love": "A sweet romantic message, crush, playful heartfelt flirtation, intuitive connection, and refreshing emotional vulnerability.",
      "career": "Artistic ideas, creative projects, intuitive solutions to workplace problems, or receiving an unexpected, encouraging professional opportunity.",
      "finances": "Small financial windfalls, investing in creative or intuitive pursuits, but needing to balance dreams with practical accounting.",
      "advice": "Listen to the quiet whispers of your intuition. Stay open to life's surprises and express your feelings with childlike honesty."
    },
    "reversed": {
      "general": "Reversed, the Page of Cups warns of emotional immaturity, moodiness, escapism into fantasy, creative blocks, or hypersensitivity to criticism.",
      "love": "Childish behavior in love, sulking when not getting your way, romantic delusions, or receiving disappointing romantic news.",
      "career": "Creative stagnation, taking professional feedback too personally, or daydreaming on the job instead of completing tasks.",
      "finances": "Impulsive purchases driven by emotional mood swings, or unrealistic financial daydreams without grounding.",
      "advice": "Ground your emotional sensitivity in mature discernment. Do not retreat into fantasy when reality asks for emotional maturity."
    }
  },
  "Cups12": {
    "name": "Knight of Cups",
    "upright": {
      "general": "The Knight of Cups represents romantic pursuit, following your heart, idealistic vision, diplomatic grace, and extending an offer of deep emotion.",
      "love": "The classic romantic lover: sweeping gestures, heartfelt declarations, empathy, and pursuing a relationship with poetic beauty.",
      "career": "Diplomatic workplace negotiations, pursuing passion projects, artistic endeavors, and using empathy and charm to succeed.",
      "finances": "Financial offers aligned with your values, but ensuring you evaluate contracts with logical scrutiny rather than mere emotional optimism.",
      "advice": "Follow your heart's calling with chivalry and grace. Extend the olive branch and let your highest ideals guide your actions."
    },
    "reversed": {
      "general": "Reversed, the Knight of Cups points to moodiness, disillusionment, manipulation through charm, passive-aggressiveness, or wearing rose-colored glasses.",
      "love": "Love-bombing followed by emotional withdrawal, broken romantic promises, jealousy, or romanticizing someone who treats you poorly.",
      "career": "Procrastination, impractical projects that lack grounding, workplace moodiness, or charming colleagues who fail to deliver on commitments.",
      "finances": "Deceptive financial propositions wrapped in charming sales pitches. Avoid making investments based on emotional appeals.",
      "advice": "Remove the rose-colored glasses. Balance your romantic and creative ideals with practical reality, and hold charm to the standard of consistency."
    }
  },
  "Cups13": {
    "name": "Queen of Cups",
    "upright": {
      "general": "The Queen of Cups represents compassionate presence, psychic intuition, emotional depth, unconditional empathy, and serene emotional wisdom.",
      "love": "Deep emotional intimacy, nurturing and empathetic partnership, soulful understanding, and a loving sanctuary for your heart.",
      "career": "Empathetic leadership, roles in counseling, healing, arts, or mediation. Navigating workplace relationships with emotional intelligence.",
      "finances": "Finances managed with care and intuition. Supporting loved ones while maintaining healthy boundaries around personal resources.",
      "advice": "Trust your intuitive wisdom and lead with compassion. Hold space for others without absorbing their emotional burdens as your own."
    },
    "reversed": {
      "general": "Reversed, the Queen of Cups warns of emotional codependency, feeling overwhelmed by others' feelings, moodiness, or neglecting personal boundaries.",
      "love": "Codependency in romance, emotional manipulation or guilt-tripping, boundary erosion, or becoming completely drained by an emotionally needy partner.",
      "career": "Emotional exhaustion in caregiver or high-stress roles, taking work problems too personally, or feeling underappreciated.",
      "finances": "Spending money to rescue irresponsible people, financial codependency, or neglecting your own material security to please others.",
      "advice": "Erect firm, loving boundaries. You cannot heal others by sacrificing your own emotional and financial stability."
    }
  },
  "Cups14": {
    "name": "King of Cups",
    "upright": {
      "general": "The King of Cups embodies emotional maturity, compassionate balance, diplomatic calm, wisdom in crisis, and mastery over deep feelings.",
      "love": "A steady, emotionally available partner, calm resolution of conflicts, unconditional love paired with mature boundaries, and emotional safety.",
      "career": "Wise leadership, conflict mediation, mentoring colleagues, and remaining steady, poised, and objective in high-stress corporate environments.",
      "finances": "Balanced, prudent financial stewardship. Sound judgment that avoids emotional panic selling or greedy impulse buying.",
      "advice": "Navigate turbulent waters with calm emotional mastery. Keep your heart open while keeping your mind clear and grounded."
    },
    "reversed": {
      "general": "Reversed, the King of Cups signals emotional volatility, suppressed feelings erupting into passive-aggressive behavior, manipulation, or cold detachment.",
      "love": "Emotional withholding, gaslighting, unpredictable mood swings, or a partner who masks vulnerability behind icy cynicism.",
      "career": "Toxic management through guilt or manipulation, passive-aggressive workplace dynamics, or losing composure under professional pressure.",
      "finances": "Financial decisions influenced by hidden emotional turmoil, alcoholism/addiction draining resources, or unethical financial deals.",
      "advice": "Stop suppressing your true feelings. Seek healthy, honest expression for your emotions and refuse to engage in passive-aggressive games."
    }
  },
  "Swords01": {
    "name": "Ace of Swords",
    "upright": {
      "general": "The Ace of Swords represents mental clarity, breakthrough insight, raw truth, cutting through illusions, and the triumph of intellect and justice.",
      "love": "Radical honesty, clearing the air with candid communication, breakthrough understanding between partners, and decisive clarity in dating.",
      "career": "Brilliant strategic ideas, intellectual breakthroughs, legal victory, decisive problem-solving, and cutting through project confusion.",
      "finances": "Clear-eyed financial assessment, spotting hidden costs, cutting wasteful expenditures, and making rational, data-driven financial decisions.",
      "advice": "Speak the truth with precision and courage. Use your sharp intellect to cut away illusions and see the unvarnished reality."
    },
    "reversed": {
      "general": "Reversed, the Ace of Swords warns of clouded judgment, mental confusion, cruel or weaponized words, misinformation, or intellectual arrogance.",
      "love": "Cutting remarks that wound a partner, miscommunication, painful confrontations, or using logic to invalidate someone's emotional feelings.",
      "career": "Flawed analysis, intellectual paralysis, hostility in communication, or a brilliant plan executed with terrible tact.",
      "finances": "Deceptive contracts, misunderstandings in financial terms, or making rash monetary decisions based on faulty assumptions.",
      "advice": "Sheathe your blade before speaking in anger. Seek clarity before making judgments, and temper truth with compassionate empathy."
    }
  },
  "Swords02": {
    "name": "Two of Swords",
    "upright": {
      "general": "The Two of Swords represents a difficult dilemma, stalemate, emotional truce, weighing conflicting options, and refusing to face an obvious truth.",
      "love": "Stalemate in a relationship, avoiding an uncomfortable conversation, emotional avoidance, or being caught between two romantic choices.",
      "career": "Deadlock in negotiations, being caught between conflicting company factions, or putting off a major professional decision.",
      "finances": "Ignoring mounting financial issues, inability to decide between investment strategies, or avoiding looking at your bank statements.",
      "advice": "Remove the blindfold. Gather the facts, listen to your heart and mind, and make the decision you have been avoiding."
    },
    "reversed": {
      "general": "Reversed, the Two of Swords indicates indecision reaching a breaking point, information overload, forced confrontation, or truth breaking through denial.",
      "love": "The breaking of a painful stalemate, confronting the elephant in the room, or being forced to make a definitive choice in romance.",
      "career": "Deadlocks broken in negotiations, being forced to take a side in workplace disputes, or overcoming analysis paralysis.",
      "finances": "Facing financial realities that can no longer be swept under the rug, uncovering discrepancies, and taking corrective action.",
      "advice": "Acknowledge the truth that is now exposed. Stop sitting on the fence and take decisive action to move forward."
    }
  },
  "Swords03": {
    "name": "Three of Swords",
    "upright": {
      "general": "The Three of Swords represents heartbreak, sorrow, painful truth, emotional release, and the necessary grief that leads to healing.",
      "love": "Painful breakup, betrayal, emotional rejection, grief, or hearing hard truths that shatter romantic illusions.",
      "career": "Rejection of a project, harsh workplace criticism, layoffs, or betrayal by a trusted colleague.",
      "finances": "Financial loss, painful contractual disputes, or economic disappointment that causes emotional distress.",
      "advice": "Allow yourself to feel the pain without resisting. Heartbreak is an opening; express your grief and let the healing process begin."
    },
    "reversed": {
      "general": "Reversed, the Three of Swords indicates recovery from grief, releasing old hurt, forgiveness, or conversely, dwelling endlessly in bitter sorrow.",
      "love": "Healing after heartbreak, forgiving past hurts, reconciling after a painful period, or releasing bitterness to love again.",
      "career": "Bouncing back from professional rejection, mending workplace bridges, and moving past a painful career setback.",
      "finances": "Rebounding from financial loss, settling disputes peacefully, and overcoming emotional panic regarding money.",
      "advice": "Release past resentments. Forgive where you can, pull out the swords from your heart, and open the door to renewal."
    }
  },
  "Swords04": {
    "name": "Four of Swords",
    "upright": {
      "general": "The Four of Swords represents rest, recuperation, sanctuary, mental reset, quiet contemplation, and taking an intentional pause to recharge your spirit.",
      "love": "Taking a healthy breather from relationship drama, giving each other space to decompress, or taking a break from dating to recharge.",
      "career": "Taking a well-deserved vacation, stepping away from high-stress deadlines, preventing burnout, and clearing your mind for future strategy.",
      "finances": "Financial pause. Avoiding impulsive spending or investments; taking time to calmly review your financial strategy in peace.",
      "advice": "Rest your mind and body. Step away from the battlefield and give yourself time to recover before taking on new challenges."
    },
    "reversed": {
      "general": "Reversed, the Four of Swords warns of resisting needed rest, severe burnout, forced bedrest from exhaustion, or re-entering the fray before you are healed.",
      "love": "Prematurely reopening old arguments, restlessness sabotaging a peaceful dynamic, or feeling isolated in your relationship.",
      "career": "Working through illness and exhaustion, refusing to delegate, and suffering from catastrophic mental fatigue.",
      "finances": "Financial stress causing sleepless nights, or impulsively spending out of boredom during a period of enforced stillness.",
      "advice": "Heed your body's warnings. You cannot pour from an exhausted mind; surrender to restorative rest before burnout forces you to stop."
    }
  },
  "Swords05": {
    "name": "Five of Swords",
    "upright": {
      "general": "The Five of Swords represents conflict, winning at all costs, hollow victory, friction, and realizing pride's steep and bitter price.",
      "love": "Winning the argument but losing the relationship, hurtful insults, lingering resentment, and ego battles between partners.",
      "career": "Cutthroat corporate politics, sabotage, winning a dispute while alienating valuable colleagues, or toxic workplace culture.",
      "finances": "Disputes over money, being taken advantage of in financial agreements, or winning a monetary dispute that cost too much in legal fees.",
      "advice": "Ask yourself if this victory is worth the collateral damage. Choose peace and integrity over the hollow satisfaction of being 'right'."
    },
    "reversed": {
      "general": "Reversed, the Five of Swords signals ending a futile argument, walking away from toxic battles, seeking reconciliation, or lingering bitterness.",
      "love": "Laying down arms in relationship disputes, apologizing for hurtful words, or deciding to leave an emotionally abusive dynamic.",
      "career": "Tiring of office politics, seeking an amicable resolution, or leaving a hostile workplace to protect your mental health.",
      "finances": "Ending costly legal battles, accepting a compromise in monetary disputes, and cutting losses to preserve peace of mind.",
      "advice": "Walk away from unwinnable battles. Preserve your dignity and peace; some victories are simply not worth the cost."
    }
  },
  "Swords06": {
    "name": "Six of Swords",
    "upright": {
      "general": "The Six of Swords represents transition, leaving stormy waters behind, moving toward calmer shores, quiet journeys, and steady emotional recovery.",
      "love": "Moving past a turbulent relationship phase, leaving a toxic romance behind, or taking a peaceful, restorative journey with your partner.",
      "career": "Transitioning to a better job, moving past workplace conflict, or finding a more supportive and orderly professional environment.",
      "finances": "Gradual financial recovery, stabilizing your budget after an economic storm, and moving toward secure financial footing.",
      "advice": "Trust the transition. The worst of the storm is behind you; keep rowing steadily toward the calmer waters ahead."
    },
    "reversed": {
      "general": "Reversed, the Six of Swords warns of carrying emotional baggage into new shores, resisting necessary transition, delayed travel, or unresolved baggage dragging you down.",
      "love": "Bringing past relationship trauma into a new romance, inability to let go of old arguments, or returning to a turbulent ex.",
      "career": "Stalled job transitions, feeling unable to escape a chaotic company, or bringing toxic work habits into a new workplace.",
      "finances": "Relapsing into bad spending habits, unresolved debts delaying financial recovery, or unexpected travel costs.",
      "advice": "Leave the old storms behind completely. You cannot reach the calm shore if you keep reaching back to drag the anchor along."
    }
  },
  "Swords07": {
    "name": "Seven of Swords",
    "upright": {
      "general": "The Seven of Swords represents strategic stealth, tactical maneuvering, self-reliance, keeping your cards close to your chest, or navigating around obstacles diplomatically.",
      "love": "Keeping secrets from a partner, sneaky behavior, suspicion of infidelity, or needing privacy and space to process personal feelings.",
      "career": "Working independently, using strategic cleverness rather than brute force, protecting intellectual property, or navigating office politics quietly.",
      "finances": "Exercising caution with financial secrets, protecting passwords and assets, and avoiding risky or under-the-table financial schemes.",
      "advice": "Be strategic and discreet. Protect your interests, but ensure your actions do not cross into deceit or breach trusted relationships."
    },
    "reversed": {
      "general": "Reversed, the Seven of Swords indicates coming clean, confession, exposed deceit, conscience catching up, or overcoming imposter syndrome.",
      "love": "Secrets coming to light, confessing deception, rebuilding shattered trust through transparency, or breaking free from deceitful partners.",
      "career": "Getting caught taking shortcuts, owning up to mistakes, or finding the courage to expose unethical practices in your company.",
      "finances": "Uncovering fraud, acknowledging poor financial decisions, or coming clean about hidden debts to your partner.",
      "advice": "Come clean and embrace transparency. The burden of secrecy is far heavier than the discomfort of honest truth."
    }
  },
  "Swords08": {
    "name": "Eight of Swords",
    "upright": {
      "general": "The Eight of Swords represents perceived helplessness, self-imposed mental traps, limiting beliefs, isolation, and feeling bound when the ropes are actually loose.",
      "love": "Feeling trapped in a relationship, victim mentality, believing you cannot find love elsewhere, or letting fear prevent honest communication.",
      "career": "Feeling trapped in a dead-end job, paralyzing imposter syndrome, or believing you have no career options when paths exist.",
      "finances": "Feeling suffocated by financial stress, paralysis about debts, and feeling helpless instead of seeking practical debt solutions.",
      "advice": "Recognize that your mental prison is self-created. Step out of limiting beliefs; the blindfold and bonds are ready to be cast off."
    },
    "reversed": {
      "general": "Reversed, the Eight of Swords signals mental liberation, reclaiming personal agency, stepping out of self-doubt, and uncovering the way forward.",
      "love": "Breaking free from an emotionally stifling relationship, finding your voice, and realizing you have the power to choose happiness.",
      "career": "Overcoming imposter syndrome, taking proactive steps to leave a dead-end job, and realizing your market value.",
      "finances": "Taking decisive control of finances, creating a workable debt repayment plan, and breaking free from financial anxiety.",
      "advice": "Walk boldly into your freedom. You have reclaimed your power; now take the tangible steps to change your reality."
    }
  },
  "Swords09": {
    "name": "Nine of Swords",
    "upright": {
      "general": "The Nine of Swords represents nighttime anxieties, insomnia, despair, catastrophic thinking, and the heavy mental burden of worry and guilt.",
      "love": "Paralyzing relationship anxiety, fear of abandonment, sleepless nights worrying about your partner, or irrational guilt.",
      "career": "Extreme workplace stress, dreading Mondays, catastrophic fear of failure, and sleeplessness caused by professional pressure.",
      "finances": "Severe panic over money, catastrophizing bills, and feeling overwhelmed by financial dread even when solutions exist.",
      "advice": "Breathe. Most of what you fear exists solely in your mind. Reach out for help, speak your worries aloud, and let morning light dispel the dark."
    },
    "reversed": {
      "general": "Reversed, the Nine of Swords signals shadows receding, reaching out for support, perspective shift, releasing panic, and realizing the worst is in the past.",
      "love": "Relief from relationship paranoia, opening up to your partner about your fears, and realizing your anxieties were unfounded.",
      "career": "Overcoming burnout, seeing a workable path through workplace challenges, and leaving catastrophic work stress behind.",
      "finances": "Finding practical solutions to financial troubles, breathing a sigh of relief, and seeing manageable steps to financial stability.",
      "advice": "Let go of catastrophic thoughts. Anchor yourself in the factual present and allow supportive friends or professionals to assist you."
    }
  },
  "Swords10": {
    "name": "Ten of Swords",
    "upright": {
      "general": "The Ten of Swords represents painful rock bottom, an unavoidable ending, betrayal, letting the curtain fall, and the golden dawn breaking on the horizon.",
      "love": "A painful breakup, the final collapse of an unsustainable romance, betrayal, but the assurance that the worst is now completely over.",
      "career": "Sudden termination, project cancellation, severe workplace betrayal, or reaching the absolute end of a career chapter.",
      "finances": "Reaching financial rock bottom, bankruptcy, or total collapse of an investment. However, there is nowhere to go from here but up.",
      "advice": "Accept that this chapter has ended completely. Do not resist the closure; pick yourself up, for the new dawn is already rising."
    },
    "reversed": {
      "general": "Reversed, the Ten of Swords signals surviving the worst, slow recovery beginning, pulling out the swords, or refusing to accept an inevitable ending.",
      "love": "Healing from a devastating breakup, rebuilding trust slowly, or stubbornly clinging to a relationship that has already drawn its last breath.",
      "career": "Bouncing back from job loss, dusting yourself off after a career failure, and finding the courage to start a fresh professional path.",
      "finances": "Rebuilding finances from ground zero, surviving an economic crash, and establishing fresh, resilient money habits.",
      "advice": "The worst is behind you. Stand up and turn your face toward the dawn; your healing and resurrection begin today."
    }
  },
  "Swords11": {
    "name": "Page of Swords",
    "upright": {
      "general": "The Page of Swords represents an inquisitive mind, mental agility, thirst for truth, candid communication, and vigilant observation.",
      "love": "Lively intellectual banter, curiosity about a partner, blunt honesty, or keeping tabs on an interesting love interest on social media.",
      "career": "Conducting sharp research, pitching new intellectual concepts, rapid learning, and vigilant attention to detail at work.",
      "finances": "Carefully researching financial options, scrutinizing bank statements, and asking sharp questions before making investments.",
      "advice": "Stay curious, vigilant, and eager to learn. Speak truth clearly, but be mindful not to let your intellect become needlessly sharp or caustic."
    },
    "reversed": {
      "general": "Reversed, the Page of Swords warns of defensive chatter, gossip, cynicism, paranoia, all talk with no action, or spreading hurtful rumors.",
      "love": "Snooping through a partner's phone, paranoid accusations, childish arguments, or hurtful sarcasm damaging romantic warmth.",
      "career": "Spreading office gossip, acting defensively to constructive criticism, or promising brilliant results without putting in the work.",
      "finances": "Falling for fraudulent schemes, reckless financial blunders due to superficial research, or arguing over petty pennies.",
      "advice": "Close your mouth and open your ears. Channel your sharp intellect into rigorous personal study rather than petty criticism."
    }
  },
  "Swords12": {
    "name": "Knight of Swords",
    "upright": {
      "general": "The Knight of Swords represents swift ambition, fierce determination, championing a cause, sharp intellect, and charging directly into action.",
      "love": "Pursuing love with direct, candid intensity. Intellectual connection, but watch out for emotional bluntness or impatience.",
      "career": "Charging through obstacles, fierce debate, decisive execution, and championing innovation with relentless mental drive.",
      "finances": "Aggressive pursuit of financial goals, seizing swift opportunities, and making rapid, decisive investment moves.",
      "advice": "Charge ahead with clear intellectual conviction. Be decisive and bold, but make sure you don't bulldoze over the feelings of others."
    },
    "reversed": {
      "general": "Reversed, the Knight of Swords warns of tactless bluntness, reckless haste, argumentative aggression, or charging furiously in the wrong direction.",
      "love": "Hurtful verbal arguments, attacking a partner's vulnerabilities in debates, or rushing into relationships with manic intensity.",
      "career": "Bullying colleagues, reckless execution causing costly mistakes, or arrogance that alienates superiors and clients.",
      "finances": "Rushing into volatile financial gambles, hasty contracts signed without due diligence, and financial volatility.",
      "advice": "Pull back the reins. Reckless speed without clear direction leads to disaster; pause, listen, and temper your ambition with wisdom."
    }
  },
  "Swords13": {
    "name": "Queen of Swords",
    "upright": {
      "general": "The Queen of Swords represents clear discernment, unbiased honesty, astute intelligence, healthy boundaries, and perceptive humor.",
      "love": "Valuing honesty and independence, communicating with clarity, setting firm healthy boundaries, and seeing through romantic facades.",
      "career": "Astute leadership, strategic problem-solving, objective evaluation, and cutting through corporate politics with sharp intelligence.",
      "finances": "Smart, analytical money management, cutting unnecessary expenses without sentimentality, and negotiating contracts with acumen.",
      "advice": "Use your intellect and clear boundaries to protect your peace. Speak truth with poise, but remember to let compassion guide your clarity."
    },
    "reversed": {
      "general": "Reversed, the Queen of Swords warns of cold detachment, bitter cynicism, hyper-critical cruelty, or weaponizing truth without empathy.",
      "love": "Emotional ice walls, picking a partner apart with relentless criticism, holding onto past betrayals, or unyielding bitterness.",
      "career": "A harsh, unapproachable manager, toxic perfectionism, or alienating team members through constant fault-finding.",
      "finances": "Overly paranoid hoarding of money, harsh financial criticism of a partner, or bad financial advice given out of spite.",
      "advice": "Thaw your heart. Boundaries are meant to protect you, not to isolate you in a cold fortress of bitterness and cynicism."
    }
  },
  "Swords14": {
    "name": "King of Swords",
    "upright": {
      "general": "The King of Swords represents intellectual authority, principled fairness, logical analysis, high ethical clarity, and decisive wisdom.",
      "love": "Intellectual harmony, fair and honest communication, mature problem-solving, and loyalty grounded in shared ethical standards.",
      "career": "Legal authority, executive leadership, strategic mastery, and setting the standard for professional integrity and analytical excellence.",
      "finances": "Mastery over financial systems, sound tax and legal planning, and dispassionate, highly analytical investment strategies.",
      "advice": "Lead with intellect, ethics, and clear-eyed objectivity. Make your decisions based on truth, justice, and long-term principles."
    },
    "reversed": {
      "general": "Reversed, the King of Swords warns of dogmatic rigidity, intellectual tyranny, abusing authority, cold ruthlessness, or manipulativeness.",
      "love": "Emotional coldness, treating romance like a sterile courtroom trial, domineering arguments, or intellectual condescension.",
      "career": "An autocratic boss, abusing legal technicalities, corruption, or using intelligence to deceive and manipulate colleagues.",
      "finances": "Ruthless financial practices, legal disputes over money, or using contracts to exploit others.",
      "advice": "Temper logic with human compassion. Intelligence without empathy becomes cruelty; govern your mind with ethical humility."
    }
  },
  "Pentacles01": {
    "name": "Ace of Pentacles",
    "upright": {
      "general": "The Ace of Pentacles represents tangible opportunity, practical abundance, financial seeds, grounding, and promising material beginnings.",
      "love": "A grounded, stable relationship, security in love, mutual commitment to building a shared future and tangible life together.",
      "career": "A lucrative job offer, business funding, a tangible promotion, or launching a practical venture with exceptional growth potential.",
      "finances": "A new source of income, unexpected windfall, wise property purchase, or laying the foundation for enduring material wealth.",
      "advice": "Seize the tangible seed offered to you. Plant it in rich soil, nurture it with daily effort, and build something of lasting value."
    },
    "reversed": {
      "general": "Reversed, the Ace of Pentacles warns of missed financial chances, poor investments, unstable foundations, or greed and materialism.",
      "love": "Financial strain creating relationship anxiety, putting money above emotional connection, or hesitation to build a stable future.",
      "career": "Delayed job offers, contracts falling through, poor business planning, or rushing a venture before securing capital.",
      "finances": "Missed investment windows, unexpected financial drains, bad budgeting, or falling prey to unreliable investments.",
      "advice": "Review your material foundations. Address financial leaks, avoid get-rich-quick gambles, and focus on practical long-term stability."
    }
  },
  "Pentacles02": {
    "name": "Two of Pentacles",
    "upright": {
      "general": "The Two of Pentacles represents balance, juggling priorities, flexibility, navigating change with agility, and managing resources gracefully.",
      "love": "Balancing romance with busy career and family demands, maintaining playful adaptability with a partner, and staying flexible.",
      "career": "Multitasking effectively, juggling multiple projects or client demands, and adapting smoothly to shifting workplace priorities.",
      "finances": "Managing cash flow, juggling bills skillfully, and keeping budget balanced during periods of fluctuating income.",
      "advice": "Stay agile and flexible. Flow with life's shifting currents and prioritize what matters most without dropping the essential balls."
    },
    "reversed": {
      "general": "Reversed, the Two of Pentacles warns of financial disorganization, feeling overwhelmed by competing demands, dropping a critical ball, or burnout.",
      "love": "Neglecting your relationship due to workaholic tendencies, feeling pulled in too many directions, or stress causing emotional friction.",
      "career": "Taking on too many commitments, missing deadlines, disorganization, and feeling overwhelmed by an unmanageable workload.",
      "finances": "Living paycheck to paycheck, dropping the ball on bills, disarray in accounting, or overextending credit cards.",
      "advice": "Simplify your life immediately. Cut non-essential commitments, get your calendar in order, and focus on one priority at a time."
    }
  },
  "Pentacles03": {
    "name": "Three of Pentacles",
    "upright": {
      "general": "The Three of Pentacles represents master craftsmanship, collaborative teamwork, building quality, mentorship, and mutual appreciation of skills.",
      "love": "Building a shared life through teamwork, learning from each other, working cooperatively on domestic projects, and mutual respect.",
      "career": "Outstanding teamwork, recognition of your specialized craft, productive collaborations with clients, and building lasting projects.",
      "finances": "Investing in professional development, real estate renovation, or collaborating with expert financial advisors to build wealth.",
      "advice": "Collaborate with skilled partners and take pride in your craft. Listen to expert guidance and contribute your unique expertise to the team."
    },
    "reversed": {
      "general": "Reversed, the Three of Pentacles indicates lack of teamwork, poor workmanship, uncoordinated effort, ego clashes, or lack of respect.",
      "love": "Failure to work as a team, bickering over household chores, feeling like partners are working against each other, or lack of effort.",
      "career": "Disorganized team dynamics, cutting corners on quality, ignoring client requirements, or feeling unappreciated by colleagues.",
      "finances": "Wasted money on shoddy contractors, bad professional financial advice, or financial squabbles in shared projects.",
      "advice": "Realign team expectations and standards. Insist on quality craftsmanship, communicate clearly, and set personal egos aside."
    }
  },
  "Pentacles04": {
    "name": "Four of Pentacles",
    "upright": {
      "general": "The Four of Pentacles represents financial security, frugality, guarding assets, maintaining control, and setting healthy material boundaries.",
      "love": "Desiring stability and commitment, but watching out for emotional possessiveness, jealousy, or holding back affection out of fear.",
      "career": "Job security, protecting your professional position, accumulating capital, but needing to avoid extreme risk-aversion that blocks growth.",
      "finances": "Sound savings habits, prudent wealth preservation, protecting assets, and maintaining tight control over your budget.",
      "advice": "Maintain sensible security and boundaries, but do not let fear of scarcity turn into greedy, suffocating control."
    },
    "reversed": {
      "general": "Reversed, the Four of Pentacles points to greed, scarcity mindset, reckless overspending, or conversely, learning to open your tight fist.",
      "love": "Smothering possessiveness, jealousy, treating a partner like property, or breaking free from a controlling relationship.",
      "career": "Clinging desperately to an obsolete role for safety, or recklessly burning bridges through workplace greed.",
      "finances": "Swinging between tight-fisted penny-pinching and reckless binge spending. Financial anxiety clouding your peace of mind.",
      "advice": "Open your hands. True abundance flows in circulation; release the grip of scarcity fear and trust that you will be provided for."
    }
  },
  "Pentacles05": {
    "name": "Five of Pentacles",
    "upright": {
      "general": "The Five of Pentacles represents hardship, feeling left out in the cold, material loss, isolation, and missing available sanctuary and support.",
      "love": "Feeling emotionally abandoned, going through a cold and lonely spell in dating, or relationship strain caused by financial hardship.",
      "career": "Job loss, professional rejection, feeling like an outcast at work, or struggling to find stable employment.",
      "finances": "Financial difficulty, unexpected expenses, debt pressure, or economic hardship. Remember that help and sanctuary are closer than you think.",
      "advice": "Look up from the snow. The church window is glowing with warm sanctuary; ask for help and accept available support."
    },
    "reversed": {
      "general": "Reversed, the Five of Pentacles signals recovery from hardship, finding shelter, light at the end of the tunnel, and improved material stability.",
      "love": "Healing from loneliness, emerging from a cold period in love, or finding mutual strength in overcoming hardships together.",
      "career": "Finding employment after a long search, steady career improvement, and welcoming positive shifts in professional fortune.",
      "finances": "Gradual recovery from debt, rebuilding savings, receiving financial assistance, and stabilizing your material life.",
      "advice": "Embrace the returning warmth. Take practical steps to rebuild your security, and never forget the resilience you discovered in the cold."
    }
  },
  "Pentacles06": {
    "name": "Six of Pentacles",
    "upright": {
      "general": "The Six of Pentacles represents generosity, charity, mutual aid, fair distribution of resources, and the balanced cycle of giving and receiving.",
      "love": "Balanced emotional reciprocity, generous care between partners, sharing burdens fairly, and feeling cherished and supported.",
      "career": "Receiving mentorship, fair compensation, generous bonuses, or stepping into a position to mentor and support junior colleagues.",
      "finances": "Financial generosity, donations, receiving a grant or loan on fair terms, and experiencing healthy material balance.",
      "advice": "Give generously where you can, and receive with gracious humility when offered support. Honor the sacred balance of mutual reciprocity."
    },
    "reversed": {
      "general": "Reversed, the Six of Pentacles warns of conditional generosity, strings attached, power imbalances, unpayable debts, or being taken advantage of.",
      "love": "One partner using money or favors to control the other, power struggles, or feeling indebted rather than truly loved.",
      "career": "Unfair compensation, unpaid overtime, abusive workplace charity, or superiors withholding promised bonuses.",
      "finances": "Bad debts that will not be repaid, predatory loans, scams disguised as charity, or overextending yourself to financial distress.",
      "advice": "Examine power dynamics. Refuse gifts with manipulative strings attached, and give only from genuine unconditional generosity."
    }
  },
  "Pentacles07": {
    "name": "Seven of Pentacles",
    "upright": {
      "general": "The Seven of Pentacles represents patience, evaluating long-term investment, pausing to assess the harvest, and steady sustained cultivation.",
      "love": "Assessing relationship growth, investing long-term emotional effort, and patiently allowing love to mature without forcing premature blossoms.",
      "career": "Evaluating career trajectory, reviewing project milestones, and recognizing that master achievements require sustained patience.",
      "finances": "Long-term investments, compound interest, waiting for assets to mature, and assessing the ROI on your financial decisions.",
      "advice": "Patience is your greatest virtue right now. Pause, inspect your garden, and give your investments the time they need to ripen."
    },
    "reversed": {
      "general": "Reversed, the Seven of Pentacles indicates impatience, questionable return on effort, wasted energy, or despair over slow returns.",
      "love": "Frustration with slow relationship progress, wondering if emotional investment is worth it, or staying in a dynamic yielding no emotional return.",
      "career": "Wasted effort on dead-end projects, lack of long-term vision, quitting right before the harvest, or working hard with zero strategy.",
      "finances": "Poor returns on investments, financial impatience leading to bad sells, or throwing good money after bad ventures.",
      "advice": "Audit your efforts honestly. If an investment is genuinely barren, cut your losses; if it simply needs time, practice disciplined patience."
    }
  },
  "Pentacles08": {
    "name": "Eight of Pentacles",
    "upright": {
      "general": "The Eight of Pentacles represents apprenticeship, dedication, repetitive mastery, honing your craft, taking pride in details, and steady improvement.",
      "love": "Putting dedicated daily effort into relationship health, working through communication habits, and building lasting love through care.",
      "career": "Mastering your craft, skill development, disciplined work ethic, attention to detail, and building an unassailable reputation for excellence.",
      "finances": "Earning through honest, dedicated labor. Steady accumulation of wealth through discipline and practical financial mastery.",
      "advice": "Immerse yourself in your craft. Commit to continuous improvement, master the fundamentals, and take immense pride in quality."
    },
    "reversed": {
      "general": "Reversed, the Eight of Pentacles warns of monotony, cutting corners, perfectionism paralyzing progress, burnout, or lack of ambition.",
      "love": "Relationship feeling like routine chores, neglecting intimacy due to workaholic obsession, or lack of effort to nurture romance.",
      "career": "Shoddy workmanship, cutting corners, feeling stuck in repetitive dead-end tasks, or perfectionism preventing project delivery.",
      "finances": "Underpaid for skilled work, get-rich-quick temptations diverting you from honest work, or financial disorganization.",
      "advice": "Reconnect with the joy of learning. Avoid shortcuts that ruin your reputation, but don't let perfectionism stop you from finishing your work."
    }
  },
  "Pentacles09": {
    "name": "Nine of Pentacles",
    "upright": {
      "general": "The Nine of Pentacles represents self-sufficiency, abundant independence, enjoying the fruits of labor, refined leisure, and grace in your own garden.",
      "love": "Healthy independence within a relationship, enjoying life as a happy fulfilled single, or attracting a partner who respects your sovereignty.",
      "career": "Reaching an enviable peak of professional independence, flourishing freelance or business career, and commanding respected authority.",
      "finances": "Financial independence, luxury, comfort, enjoying your hard-earned wealth, and living comfortably within your abundant means.",
      "advice": "Savor your accomplishments and enjoy your sanctuary. You have worked hard to build this life; relish your independence and peace."
    },
    "reversed": {
      "general": "Reversed, the Nine of Pentacles points to overworking, superficial luxury masking loneliness, financial dependence, or living beyond your means.",
      "love": "Loneliness amidst luxury, superficial dating based only on wealth, or fearing that relationship commitment will strip your independence.",
      "career": "Workaholism leaving no time for personal life, financial instability despite an opulent facade, or business setbacks.",
      "finances": "Living beyond your means to impress others, reckless spending on luxury goods, or financial dependence on someone else.",
      "advice": "Cultivate genuine inner independence. Drop the need to project an opulent image, and ensure your lifestyle is genuinely sustainable."
    }
  },
  "Pentacles10": {
    "name": "Ten of Pentacles",
    "upright": {
      "general": "The Ten of Pentacles represents generational legacy, enduring wealth, ancestral foundations, family stability, and lasting holistic fulfillment.",
      "love": "Long-term security, strong family support for your relationship, building a lasting family dynasty, and deep traditional stability.",
      "career": "Building a multi-generational business, corporate pinnacle, leaving a lasting professional legacy, and enjoying supreme job security.",
      "finances": "Significant generational wealth, solid property holdings, pension security, inheritance, and complete material peace of mind.",
      "advice": "Honor your roots and build for the long horizon. Create a legacy that will shelter and enrich your loved ones for generations to come."
    },
    "reversed": {
      "general": "Reversed, the Ten of Pentacles warns of family disputes over inheritance, financial instability, breaking tradition, or loss of estate.",
      "love": "Family disapproval of a partner, marital tension driven by financial struggles, or feeling suffocated by rigid family expectations.",
      "career": "Threats to company stability, disputes among business partners, or feeling trapped in an uninspiring family business.",
      "finances": "Disputes over wills, inheritance conflicts, sudden loss of property, or poor financial decisions threatening family security.",
      "advice": "Protect your family's true wealth\u2014peace, integrity, and mutual respect. Resolve financial disputes with impartial fairness."
    }
  },
  "Pentacles11": {
    "name": "Page of Pentacles",
    "upright": {
      "general": "The Page of Pentacles represents studious curiosity, ambitious practical goals, grounded beginnings, learning skills, and reliable opportunities.",
      "love": "A steady, loyal romantic connection, building practical relationship foundations, dependability, and shared realistic goals.",
      "career": "Starting a promising apprenticeship, learning practical job skills, dedication to professional growth, and setting clear goals.",
      "finances": "Receiving promising financial news, starting a savings plan, or learning sound principles of investing and budget management.",
      "advice": "Adopt the posture of a humble, eager student. Set clear tangible goals and build your future through steady daily application."
    },
    "reversed": {
      "general": "Reversed, the Page of Pentacles indicates procrastination, lack of focus, neglecting practical matters, unrealistic financial dreams, or laziness.",
      "love": "Boredom, lack of romantic effort, neglecting relationship duties, or being unreliable and flaky in partnership.",
      "career": "Failing exams or training due to lack of study, procrastination, lack of career ambition, or dreaming without working.",
      "finances": "Impulsive spending on gadgets, irresponsible budgeting, or failing to follow through on financial savings goals.",
      "advice": "Snap out of procrastination. Build daily discipline, ground your ambitious dreams in practical tasks, and follow through."
    }
  },
  "Pentacles12": {
    "name": "Knight of Pentacles",
    "upright": {
      "general": "The Knight of Pentacles represents methodical diligence, steadfast commitment, patient routine, rock-solid reliability, and steady incremental progress.",
      "love": "Unwavering loyalty, dependable romantic devotion, patient love that stands the test of time, and honoring every promise made.",
      "career": "Methodical execution, exceptional work ethic, reliability, seeing tedious projects through to flawless completion.",
      "finances": "Conservative, steady wealth accumulation. Prudent investments, zero gambles, and building security brick by patient brick.",
      "advice": "Keep your head down and keep plowing the field. Consistent, disciplined daily effort will inevitably deliver monumental success."
    },
    "reversed": {
      "general": "Reversed, the Knight of Pentacles warns of stubborn inertia, boring routine, workaholism, or laziness, unreliability, and resistance to effort.",
      "love": "Relationship becoming dreadfully boring and routine, stubborn inflexibility, or neglecting romance in favor of endless work.",
      "career": "Stuck in soul-crushing routine, stubborn refusal to adapt to modern methods, or extreme laziness missing critical deadlines.",
      "finances": "Financial stagnation, being too timid to take sensible opportunities, or neglecting financial responsibilities out of apathy.",
      "advice": "Inject some spontaneity into your routine. Break out of the rut while preserving your commendable work ethic and reliability."
    }
  },
  "Pentacles13": {
    "name": "Queen of Pentacles",
    "upright": {
      "general": "The Queen of Pentacles represents nurturing abundance, practical warmth, domestic harmony, down-to-earth wisdom, and generous hospitality.",
      "love": "Loving, grounded partnership, creating a cozy and welcoming home, generous care, and supporting each other's practical dreams.",
      "career": "Practical leadership, balancing work and family successfully, running a grounded business, and caring for team well-being.",
      "finances": "Prudent financial stewardship, investing in home, wellness, and family security, and generating comfortable abundance.",
      "advice": "Root yourself in practical care and warmth. Tend to your body, your home, and your resources with grounded love and generosity."
    },
    "reversed": {
      "general": "Reversed, the Queen of Pentacles warns of material anxiety, suffocating control, work-life imbalance, or neglecting self-care and domestic peace.",
      "love": "Nagging or controlling behavior in relationships, prioritizing material status over affection, or feeling unappreciated at home.",
      "career": "Overworked and neglecting personal health, workplace micromanagement, or feeling trapped in material worries.",
      "finances": "Financial anxiety despite having enough, stinginess, or conversely, shopping compulsively to soothe domestic dissatisfaction.",
      "advice": "Slow down and tend to your own well-being. Ground yourself in nature, practice self-nurture, and remember that material wealth is meant to serve life, not dominate it."
    }
  },
  "Pentacles14": {
    "name": "King of Pentacles",
    "upright": {
      "general": "The King of Pentacles embodies financial mastery, worldly stability, generous leadership, enduring success, and wise practical enterprise.",
      "love": "A protective, generous, and completely reliable partner. Building an abundant, comfortable, and enduring life of mutual security.",
      "career": "Business tycoon, financial executive, pinnacle of material success, wise entrepreneurship, and generous mentorship of others.",
      "finances": "Total financial mastery, substantial wealth, prime property ownership, and generating abundant prosperity with effortless acumen.",
      "advice": "Lead with generosity, wisdom, and grounded integrity. Build enduring foundations and use your abundance to uplift those in your care."
    },
    "reversed": {
      "general": "Reversed, the King of Pentacles warns of greed, materialistic obsession, stubborn conservatism, corruption, or mismanagement of wealth.",
      "love": "Viewing relationships as commercial transactions, emotional coldness masked by expensive gifts, or using money to control a partner.",
      "career": "Corporate greed, corrupt business practices, stubborn refusal to innovate, or bankrupting projects through arrogance.",
      "finances": "Financial losses from stubborn mismanagement, bad investments driven by greed, or stinginess that alienates loved ones.",
      "advice": "Examine your relationship with money and power. Reclaim your integrity and remember that character and kindness are far more valuable than gold."
    }
  }
};
