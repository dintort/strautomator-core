// Strautomator Core: Announcement types

/**
 * Global announcements (new features, changes etc).
 */
export interface Announcement {
    /** Announcement indexed by ID, prefixed with "ann". */
    id: string
    /** Title of the announcement. */
    title: string
    /** Body of the announcement. */
    body: string
    /** Link associated with the announcement. */
    href?: string
    /** Date when it should start appearing. */
    dateStart: Date
    /** Date when it should expire (end). */
    dateExpiry: Date
    /** Targeting users that registered before the specified date. */
    dateRegisteredBefore?: Date
    /** How many times it was read (closed by the user). */
    readCount?: number
    /** Is it about a new feature? */
    newFeature?: boolean
    /** Affiliate link? */
    affiliate?: boolean
    /** Targeting Free users only? */
    isFree?: boolean
    /** Targeting PRO users only? */
    isPro?: boolean
    /** Only to users who have bikes in Strava. */
    hasBikes?: boolean
    /** Only to users who have shoes in Strava. */
    hasShoes?: boolean
    /** Only to users with a Garmin or Wahoo account. */
    hasGarminWahoo?: boolean
    /** Restrict to uses from specific countries? */
    countries?: string[]
}
